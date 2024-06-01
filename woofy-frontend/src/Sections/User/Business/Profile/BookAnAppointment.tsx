import React, { useState, useEffect } from 'react';
import { BUSINESS_TYPES } from '../../../../models/Enums/Enums';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fDate } from '../../../../utils/format-time';
import api from '../../../../api/api';
import { formatEnumValue } from "../../../../utils/format-enum-text";
import { useNotifications } from "../../../../provider/NotificationContext";
import {useRouter} from "../../../../routes/hooks";

interface Business {
    id: number;
    businessName: string;
}

interface Slot {
    startTime: string;
    endTime: string;
}

interface Props {
    business: Business;
    selectedService: string;
}

const BookAnAppointment: React.FC<Props> = ({ business, selectedService }) => {
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [availableSlots, setAvailableSlots] = useState<Record<string, number> | Slot[]>([]);
    const [totalCapacity, setTotalCapacity] = useState<number | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [isAvailabilityFetched, setIsAvailabilityFetched] = useState(false);
    const { addNotification } = useNotifications();
    const router = useRouter();

    const servicePrices = {
        [BUSINESS_TYPES.BOARDING]: 50,
        [BUSINESS_TYPES.DAY_CARE]: 30,
        [BUSINESS_TYPES.DOG_SITTER]: 20,
        [BUSINESS_TYPES.DOG_WALK]: 15,
    };

    useEffect(() => {
        setAvailableSlots([]);
        setIsAvailabilityFetched(false);
        setTotalCapacity(null);
    }, [selectedDate, endDate]);

    const validateFields = () => {
        let isValid = true;

        if (!endDate && selectedService === BUSINESS_TYPES.BOARDING) {
            toast.error('End Date is required');
            isValid = false;
        }
        if (!selectedDate) {
            toast.error('Selected Date is required');
            isValid = false;
        }
        return isValid;
    };

    const handleFindAvailability = async () => {
        if (!validateFields()) {
            return;
        }

        setIsFetching(true);

        try {
            let response;
            switch (selectedService) {
                case BUSINESS_TYPES.BOARDING:
                    response = await api.post('/appointment/boarding/available-capacity-by-date-range', {
                        startDate: fDate(selectedDate!, 'yyyy-MM-dd'),
                        endDate: fDate(endDate!, 'yyyy-MM-dd'),
                        businessId: business.id,
                    });
                    setAvailableSlots(response.data);
                    setTotalCapacity(5); // Replace with actual capacity from API if available
                    break;
                case BUSINESS_TYPES.DAY_CARE:
                    response = await api.post('/appointment/day-care/available-capacity-by-date', {
                        date: fDate(selectedDate!, 'yyyy-MM-dd'),
                        businessId: business.id,
                    });
                    setAvailableSlots(response.data);
                    setTotalCapacity(5); // Replace with actual capacity from API if available
                    break;
                case BUSINESS_TYPES.DOG_SITTER:
                case BUSINESS_TYPES.DOG_WALK:
                    response = await api.post(`/appointment/${selectedService === BUSINESS_TYPES.DOG_SITTER ? 'dog-sitter' : 'dog-walker'}/available-hours-by-business`, {
                        date: fDate(selectedDate!, 'yyyy-MM-dd'),
                        businessId: business.id,
                    });
                    setAvailableSlots(response.data);
                    break;
                default:
                    throw new Error('Invalid service type');
            }
            setIsAvailabilityFetched(true);
        } catch (error) {
            console.error('Error fetching available slots:', error);
            toast.error('Error fetching available slots');
        } finally {
            setIsFetching(false);
        }
    };

    const handleSetAppointment = async (startDate: Date, endDate: Date | null, startTime?: string, endTime?: string) => {
        const appointmentData = {
            businessId: business.id,
            date: fDate(startDate, 'yyyy-MM-dd'),
            endDate: endDate ? fDate(endDate, 'yyyy-MM-dd') : null,
            startTime: startTime || null,
            endTime: endTime || null,
        };

        try {
            let response;
            switch (selectedService) {
                case BUSINESS_TYPES.BOARDING:
                    response = await api.post('/appointment/boarding/create-appointment', appointmentData);
                    break;
                case BUSINESS_TYPES.DAY_CARE:
                    response = await api.post('/appointment/day-care/create-appointment', appointmentData);
                    break;
                case BUSINESS_TYPES.DOG_SITTER:
                    response = await api.post('/appointment/dog-sitter/create-appointment', appointmentData);
                    break;
                case BUSINESS_TYPES.DOG_WALK:
                    response = await api.post('/appointment/dog-walker/create-appointment', appointmentData);
                    break;
                default:
                    throw new Error('Invalid service type');
            }
            console.log('Appointment created:', response.data);
            addNotification({
                title: 'Appointment Added',
                description: `Your appointment in ${business.businessName} for the ${formatEnumValue(selectedService)} service has been booked successfully.`,
                type: 'appointment_added',
                isUnRead: true,
            });
            router.push('/bookings');
        } catch (error) {
            console.error('Error creating appointment:', error);
            toast.error('Error creating appointment');
        }
    };

    const calculateTotalPrice = (startDate: Date, endDate: Date | null): number => {
        if (!startDate || !endDate) return 0;
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)) + 1;
        return diffDays * servicePrices[selectedService];
    };

    const groupFullyBookedDates = (dates: string[]): { start: string, end: string }[] => {
        const ranges: { start: string, end: string }[] = [];
        let start = dates[0];
        let end = dates[0];

        for (let i = 1; i < dates.length; i++) {
            const current = new Date(dates[i]);
            const previous = new Date(dates[i - 1]);
            const diff = (current.getTime() - previous.getTime()) / (1000 * 3600 * 24);

            if (diff > 1) {
                ranges.push({ start, end });
                start = dates[i];
            }
            end = dates[i];
        }
        ranges.push({ start, end });

        return ranges;
    };

    const renderAvailableSlots = () => {
        if (selectedService === BUSINESS_TYPES.BOARDING) {
            const dates = Object.keys(availableSlots as Record<string, number>);
            const fullyBookedDates = dates.filter(date => (availableSlots as Record<string, number>)[date] <= 0);

            if (fullyBookedDates.length > 0) {
                const ranges = groupFullyBookedDates(fullyBookedDates);
                const suggestions = [];

                // Suggest before first fully booked range
                if (selectedDate && new Date(selectedDate) < new Date(ranges[0].start)) {
                    const suggestionEndDate = new Date(new Date(ranges[0].start).getTime() - (1000 * 3600 * 24));
                    if (new Date(selectedDate) <= suggestionEndDate) {
                        suggestions.push({
                            start: selectedDate,
                            end: suggestionEndDate
                        });
                    }
                }

                // Suggest between fully booked ranges
                for (let i = 0; i < ranges.length - 1; i++) {
                    const endRange = new Date(ranges[i].end);
                    const startNextRange = new Date(ranges[i + 1].start);

                    if (startNextRange.getTime() - endRange.getTime() > (1000 * 3600 * 24)) {
                        suggestions.push({
                            start: new Date(endRange.getTime() + (1000 * 3600 * 24)),
                            end: new Date(startNextRange.getTime() - (1000 * 3600 * 24))
                        });
                    }
                }

                // Suggest after last fully booked range
                if (endDate && new Date(endDate) > new Date(ranges[ranges.length - 1].end)) {
                    const suggestionStartDate = new Date(new Date(ranges[ranges.length - 1].end).getTime() + (1000 * 3600 * 24));
                    if (suggestionStartDate <= new Date(endDate)) {
                        suggestions.push({
                            start: suggestionStartDate,
                            end: endDate
                        });
                    }
                }

                // Filter out suggestions that are fully booked
                const validSuggestions = suggestions.filter(suggestion => {
                    const suggestionDates = [];
                    for (let d = new Date(suggestion.start); d <= suggestion.end; d.setDate(d.getDate() + 1)) {
                        suggestionDates.push(d.toISOString().split('T')[0]);
                    }
                    return !suggestionDates.some(date => fullyBookedDates.includes(date));
                });

                return (
                    <div>
                        <Typography variant="h6" color="error">
                            Fully booked from {ranges.map(range => `${range.start} to ${range.end}`).join(', ')}
                        </Typography>
                        {validSuggestions.map((suggestion, index) => (
                            <div key={index}>
                                <Typography variant="body1">
                                    Total Price: ${calculateTotalPrice(suggestion.start, suggestion.end)}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => handleSetAppointment(suggestion.start, suggestion.end)}>
                                    Book from {suggestion.start.toLocaleDateString()} to {suggestion.end.toLocaleDateString()}
                                </Button>
                            </div>
                        ))}
                    </div>
                );
            } else if (selectedDate && endDate) {
                const fullyBookedInRange = dates.some(date => (availableSlots as Record<string, number>)[date] <= 0 && new Date(date) >= selectedDate && new Date(date) <= endDate);
                if (fullyBookedInRange) {
                    return (
                        <Typography variant="h6" color="error">
                            The selected date range includes fully booked dates.
                        </Typography>
                    );
                }
                return (
                    <div>
                        <Typography variant="body1">
                            Total Price: ${calculateTotalPrice(selectedDate, endDate)}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => handleSetAppointment(selectedDate, endDate)}>
                            Book from {selectedDate.toLocaleDateString()} to {endDate.toLocaleDateString()}
                        </Button>
                    </div>
                );
            }
        } else if (selectedService === BUSINESS_TYPES.DAY_CARE) {
            const date = selectedDate ? selectedDate.toLocaleDateString() : '';
            const slots = (availableSlots as Record<string, number>)[date];
            return (
                <div>
                    <Typography variant="h6">
                        {date}: {slots}/{totalCapacity} slots available
                    </Typography>
                    {slots > 0 ? (
                        <div>
                            <Typography variant="body1">
                                Total Price: ${servicePrices[selectedService]}
                            </Typography>
                            <Button variant="contained" color="primary" onClick={() => handleSetAppointment(selectedDate!, selectedDate!)}>
                                Book {date}
                            </Button>
                        </div>
                    ) : (
                        <Typography variant="body1" color="error">Fully booked</Typography>
                    )}
                </div>
            );
        } else if ((selectedService === BUSINESS_TYPES.DOG_SITTER || selectedService === BUSINESS_TYPES.DOG_WALK) && Array.isArray(availableSlots)) {
            if (availableSlots.length === 0) {
                return <Typography variant="body1" color="error">No availability</Typography>;
            }
            return (availableSlots as Slot[]).map((slot, index) => (
                <div key={index}>
                    <Typography variant="h6">
                        {slot.startTime} - {slot.endTime}
                    </Typography>
                    <div>
                        <Typography variant="body1">
                            Total Price: ${servicePrices[selectedService]}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => handleSetAppointment(selectedDate!, selectedDate!, slot.startTime, slot.endTime)}>
                            Book this slot
                        </Button>
                    </div>
                </div>
            ));
        }
        return null;
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>Book an appointment</h1>
                </div>
                <Typography
                    variant="h3"
                    sx={{ m: 0, width: '100%', fontSize: 'inherit', lineHeight: '34px', fontWeight: 'bold', fontFamily: 'inherit', textAlign: 'center' }}
                >
                    {selectedService === BUSINESS_TYPES.BOARDING && (
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <DatePicker
                                    label="Start Date"
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                            <Grid item>
                                <DatePicker
                                    label="End Date"
                                    value={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                        </Grid>
                    )}
                    {selectedService !== BUSINESS_TYPES.BOARDING && (
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <DatePicker
                                    label="Select Date"
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                        </Grid>
                    )}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button variant="contained" color="primary" onClick={handleFindAvailability} disabled={isFetching}>
                        {isFetching ? 'Fetching...' : 'Find Availability'}
                    </Button>
                </div>
                {isAvailabilityFetched && (
                    <div style={{ marginTop: '20px' }}>
                        {renderAvailableSlots()}
                    </div>
                )}
                <ToastContainer />
            </div>
        </LocalizationProvider>
    );
};

export default BookAnAppointment;

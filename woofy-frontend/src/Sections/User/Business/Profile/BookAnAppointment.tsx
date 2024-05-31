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

    const renderAvailableSlots = () => {
        if (selectedService === BUSINESS_TYPES.BOARDING) {
            const dates = Object.keys(availableSlots as Record<string, number>);
            let fullyBookedDate: string | null = null;

            dates.forEach(date => {
                if ((availableSlots as Record<string, number>)[date] === 0) {
                    fullyBookedDate = date;
                }
            });

            if (fullyBookedDate) {
                const fullyBookedIndex = dates.indexOf(fullyBookedDate);
                const beforeDates = dates.slice(0, fullyBookedIndex);
                const afterDates = dates.slice(fullyBookedIndex + 1);

                return (
                    <div>
                        <Typography variant="h6" color="error">
                            Fully booked on {fullyBookedDate}
                        </Typography>
                        {beforeDates.length > 0 && selectedDate && (
                            <div>
                                <Typography variant="body1">
                                    Total Price: ${calculateTotalPrice(selectedDate, new Date(beforeDates[beforeDates.length - 1]))}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => handleSetAppointment(selectedDate, new Date(beforeDates[beforeDates.length - 1]))}>
                                    Book from {selectedDate.toLocaleDateString()} to {new Date(beforeDates[beforeDates.length - 1]).toLocaleDateString()}
                                </Button>
                            </div>
                        )}
                        {afterDates.length > 0 && endDate && (
                            <div>
                                <Typography variant="body1">
                                    Total Price: ${calculateTotalPrice(new Date(afterDates[0]), endDate)}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => handleSetAppointment(new Date(afterDates[0]), endDate)}>
                                    Book from {new Date(afterDates[0]).toLocaleDateString()} to {endDate.toLocaleDateString()}
                                </Button>
                            </div>
                        )}
                    </div>
                );
            } else if (selectedDate && endDate) {
                const fullyBookedInRange = dates.some(date => (availableSlots as Record<string, number>)[date] === 0 && new Date(date) >= selectedDate && new Date(date) <= endDate);
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

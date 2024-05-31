import React, { useContext, useState } from 'react';
import { BUSINESS_TYPES } from '../../../../models/Enums/Enums';
import { UserContext } from '../../../../provider/UserProvider';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Button, Grid, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fDate, fDateTime } from '../../../../utils/format-time';
import api from '../../../../api/api';
import {formatEnumValue} from "../../../../utils/format-enum-text";
import {useNotifications} from "../../../../provider/NotificationContext";
import {useRouter} from "../../../../routes/hooks";

const BookAnAppointment = ({ business, selectedService }) => {
    const [endDate, setEndDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const { addNotification } = useNotifications();
    const router = useRouter();

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
        if (!startTime && (selectedService === BUSINESS_TYPES.DOG_SITTER || selectedService === BUSINESS_TYPES.DOG_WALK)) {
            toast.error('Start Time is required');
            isValid = false;
        }
        if (!endTime && (selectedService === BUSINESS_TYPES.DOG_SITTER || selectedService === BUSINESS_TYPES.DOG_WALK)) {
            toast.error('End Time is required');
            isValid = false;
        }
        return isValid;
    };

    const handleSetAppointment = async () => {
        if (!validateFields()) {
            return;
        }

        const appointmentData = {
            businessId: business.id,
            date: fDate(selectedDate, 'yyyy-MM-dd'),
            endDate: fDate(endDate, 'yyyy-MM-dd'),
            startTime,
            endTime,
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

    const getWorkingHours = (entity) => {
        const startTime = new Date();
        const endTime = new Date();

        if (entity && entity.startTime && entity.endTime) {
            const startTimes = entity.startTime.split(':');
            const endTimes = entity.endTime.split(':');

            if (startTimes.length === 2 && endTimes.length === 2) {
                const [startHour, startMinute] = startTimes.map(Number);
                const [endHour, endMinute] = endTimes.map(Number);

                if (!isNaN(startHour) && !isNaN(startMinute) && !isNaN(endHour) && !isNaN(endMinute)) {
                    startTime.setHours(startHour, startMinute, 0);
                    endTime.setHours(endHour, endMinute, 0);
                } else {
                    console.error('Invalid time format');
                }
            } else {
                console.error('Invalid time format');
            }
        } else {
            console.error('Entity or time data is missing');
        }

        return { startTime, endTime };
    };

    const generateTimeBlocks = (start, end, interval) => {
        const blocks = [];
        let current = new Date(start);
        while (current < end) {
            const blockStart = new Date(current);
            current.setMinutes(current.getMinutes() + interval);
            const blockEnd = new Date(current);
            if (blockEnd <= end) {
                blocks.push({
                    start: blockStart.toTimeString().substring(0, 5),
                    end: blockEnd.toTimeString().substring(0, 5),
                });
            }
        }
        return blocks;
    };

    const { startTime: minTime, endTime: maxTime, appointmentLengthInMinutes } = (() => {
        switch (selectedService) {
            case BUSINESS_TYPES.BOARDING:
                return { ...getWorkingHours(business.boardingEntity), appointmentLengthInMinutes: 0 };
            case BUSINESS_TYPES.DAY_CARE:
                return { ...getWorkingHours(business.dayCareEntity), appointmentLengthInMinutes: 0 };
            case BUSINESS_TYPES.DOG_SITTER:
                return { ...getWorkingHours(business.dogSitterEntity), appointmentLengthInMinutes: business.dogSitterEntity.appointmentLengthInMinutes };
            case BUSINESS_TYPES.DOG_WALK:
                return { ...getWorkingHours(business.dogWalkerEntity), appointmentLengthInMinutes: business.dogWalkerEntity.appointmentLengthInMinutes };
            default:
                return { startTime: new Date(), endTime: new Date(), appointmentLengthInMinutes: 0 };
        }
    })();

    const timeBlocks = generateTimeBlocks(minTime, maxTime, appointmentLengthInMinutes);

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
                    {selectedService === BUSINESS_TYPES.DAY_CARE && (
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
                    {(selectedService === BUSINESS_TYPES.DOG_SITTER || selectedService === BUSINESS_TYPES.DOG_WALK) && (
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <DatePicker
                                    label="Select Date"
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                            <Grid item>
                                <FormControl fullWidth sx={{ minWidth: 150 }}>
                                    <InputLabel>Time Block</InputLabel>
                                    <Select
                                        value={startTime}
                                        onChange={(e) => {
                                            const selectedBlock = timeBlocks.find(block => block.start === e.target.value);
                                            setStartTime(selectedBlock.start);
                                            setEndTime(selectedBlock.end);
                                        }}
                                    >
                                        {timeBlocks.map((block, index) => (
                                            <MenuItem key={index} value={block.start}>
                                                {`${block.start} - ${block.end}`}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    )}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button variant="contained" color="primary" onClick={handleSetAppointment}>
                        Set the appointment
                    </Button>
                </div>
                <ToastContainer />
            </div>
        </LocalizationProvider>
    );
};

export default BookAnAppointment;

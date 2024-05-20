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

const BookAnAppointment = ({ business, selectedService }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const validateFields = () => {
        let isValid = true;
        if (!startDate && selectedService === BUSINESS_TYPES.BOARDING) {
            toast.error('Start Date is required');
            isValid = false;
        }
        if (!endDate && selectedService === BUSINESS_TYPES.BOARDING) {
            toast.error('End Date is required');
            isValid = false;
        }
        if (!selectedDate && (selectedService === BUSINESS_TYPES.DOG_SITTER || selectedService === BUSINESS_TYPES.DOG_WALK)) {
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
                    response = await api.post('/appointment/create-boarding-appointment', appointmentData);
                    break;
                case BUSINESS_TYPES.DAY_CARE:
                    response = await api.post('/appointment/create-day-care-appointment', appointmentData);
                    break;
                case BUSINESS_TYPES.DOG_SITTER:
                    response = await api.post('/appointment/create-dog-sitter-appointment', appointmentData);
                    break;
                case BUSINESS_TYPES.DOG_WALK:
                    response = await api.post('/appointment/create-dog-walker-appointment', appointmentData);
                    break;
                default:
                    throw new Error('Invalid service type');
            }
            console.log('Appointment created:', response.data);
            toast.success('Appointment created successfully');
        } catch (error) {
            console.error('Error creating appointment:', error);
            toast.error('Error creating appointment');
        }
    };

    const getWorkingHours = (entity) => {
        const startTime = new Date();
        const endTime = new Date();
        if (entity) {
            const [startHour, startMinute] = entity.startTime.split(':').map(Number);
            const [endHour, endMinute] = entity.endTime.split(':').map(Number);
            startTime.setHours(startHour, startMinute, 0);
            endTime.setHours(endHour, endMinute, 0);
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
                                    value={startDate}
                                    onChange={(date) => setStartDate(date)}
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

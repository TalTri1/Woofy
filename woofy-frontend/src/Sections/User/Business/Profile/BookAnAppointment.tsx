import React, { FunctionComponent, useContext, useState } from 'react';
import { Business } from '../../../../models/BusinessModels/BusinessModel';
import { BUSINESS_TYPES } from '../../../../models/Enums/Enums';
import { UserContext } from '../../../../provider/UserProvider';
import { Typography, Button, TextField, Grid } from '@mui/material';
import SelectServiceTypeComponent from '../../../User/selectButtons/SelectServiceTypeComponent';

interface BookAnAppointmentProps {
    business: Business;
    selectedService: BUSINESS_TYPES;
}

const BookAnAppointment: FunctionComponent<BookAnAppointmentProps> = ({ business, selectedService }) => {
    const [selectedServices, setSelectedServices] = useState<BUSINESS_TYPES>(BUSINESS_TYPES.BOARDING);
    const { userDetails } = useContext(UserContext);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);

    const handleSetAppointment = () => {
        console.log('Selected Service:', selectedService);
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        console.log('Selected Date:', selectedDate);
        console.log('Start Time:', startTime);
        console.log('End Time:', endTime);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Book an appointment</h1>
            </div>
            <SelectServiceTypeComponent selectedServices={selectedServices} setSelectedServices={setSelectedServices} />
            <Typography
                variant="h3"
                sx={{ m: 0, width: '100%', fontSize: 'inherit', lineHeight: '34px', fontWeight: 'bold', fontFamily: 'inherit' }}
            >
                {selectedService === BUSINESS_TYPES.BOARDING && (
                    <Grid container spacing={2} justifyContent="center">

                    </Grid>
                )}
                {selectedService === BUSINESS_TYPES.DAY_CARE && (
                    <Grid container spacing={2} justifyContent="center">



                    </Grid>
                )}
                {(selectedService === BUSINESS_TYPES.DOG_SITTER || selectedService === BUSINESS_TYPES.DOG_WALK) && (
                    <Grid container spacing={2} justifyContent="center">




                    </Grid>
                )}
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleSetAppointment}>
                    Set the appointment
                </Button>
            </div>
        </div>
    );
};

export default BookAnAppointment;

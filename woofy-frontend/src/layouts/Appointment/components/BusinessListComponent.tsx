import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button, Box
} from '@mui/material';
import { BUSINESS_TYPES } from '../../../models/Enums/Enums';
import { Tab } from '@mui/base';

interface Business {
    id: number;
    businessName: string;
    address: string;
    city: string;
    phoneNumber: string;
    boardingEntity: ServiceEntity | null;
    dayCareEntity: ServiceEntity | null;
    dogSitterEntity: ServiceEntity | null;
    dogWalkerEntity: ServiceEntity | null;
}

interface ServiceEntity {
    acceptableDogSizes: string[];
    dogCapacity: number;
    price: number;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    workingDays: string[];
    about: string;
    images: string[];
    homeConditions: string[];
    petsInHome: string[];
    id: number;
    boardingAppointmentEntity: any;
    boardingScheduleEntity: any;
}

const BusinessListComponent: React.FC = () => {
    const [selectedService, setSelectedService] = useState<BUSINESS_TYPES>(BUSINESS_TYPES.BOARDING);
    const [availableBusinesses, setAvailableBusinesses] = useState<Business[]>([]);

    useEffect(() => {
        const fetchAvailableBusinesses = async () => {
            console.log(`Fetching available businesses for service: ${selectedService}`);
            try {
                const response = await axios.get('http://localhost:8080/api/v1/business/all');
                const data = response.data;

                const filteredBusinesses = data.filter((business: Business) => {
                    switch (selectedService) {
                        case BUSINESS_TYPES.BOARDING:
                            return business.boardingEntity !== null;
                        case BUSINESS_TYPES.DAY_CARE:
                            return business.dayCareEntity !== null;
                        case BUSINESS_TYPES.DOG_SITTER:
                            return business.dogSitterEntity !== null;
                        case BUSINESS_TYPES.DOG_WALK:
                            return business.dogWalkerEntity !== null;
                        default:
                            return false;
                    }
                });
                setAvailableBusinesses(filteredBusinesses);
            } catch (error) {
                console.error(`Failed to fetch available businesses: ${error}`);
            }
        };

        fetchAvailableBusinesses();
    }, [selectedService]);

    const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedService(event.target.value as BUSINESS_TYPES);
    };

    const getServiceEntity = (business: Business) => {
        switch (selectedService) {
            case BUSINESS_TYPES.BOARDING:
                return business.boardingEntity;
            case BUSINESS_TYPES.DAY_CARE:
                return business.dayCareEntity;
            case BUSINESS_TYPES.DOG_SITTER:
                return business.dogSitterEntity;
            case BUSINESS_TYPES.DOG_WALK:
                return business.dogWalkerEntity;
            default:
                return null;
        }
    };

    const navigateToBusinessProfile = (businessId: number) => {
        window.location.href = `http://localhost:5173/business-profile/${businessId}`;
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Choose a Service to Book
                </Typography>
                <FormControl component="fieldset">
                    <RadioGroup row value={selectedService} onChange={handleServiceChange}>
                        <FormControlLabel
                            value={BUSINESS_TYPES.BOARDING}
                            control={<Radio />}
                            label="Boarding"
                        />
                        <FormControlLabel
                            value={BUSINESS_TYPES.DAY_CARE}
                            control={<Radio />}
                            label="Day Care"
                        />
                        <FormControlLabel
                            value={BUSINESS_TYPES.DOG_SITTER}
                            control={<Radio />}
                            label="Dog Sitter"
                        />
                        <FormControlLabel
                            value={BUSINESS_TYPES.DOG_WALK}
                            control={<Radio />}
                            label="Dog Walker"
                        />
                    </RadioGroup>
                </FormControl>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>About</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Working Days</TableCell>
                            <TableCell>Dog Capacity</TableCell>
                            <TableCell>Acceptable Dog Sizes</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {availableBusinesses.map((business) => {
                            const serviceEntity = getServiceEntity(business);
                            return (
                                <TableRow key={business.id}>
                                    <TableCell>{business.businessName}</TableCell>
                                    <TableCell>{business.address}, {business.city}</TableCell>
                                    <TableCell>{serviceEntity?.about || 'N/A'}</TableCell>
                                    <TableCell>{serviceEntity?.price}</TableCell>
                                    <TableCell>{serviceEntity?.workingDays?.join(', ') || 'N/A'}</TableCell>
                                    <TableCell>{serviceEntity?.dogCapacity}</TableCell>
                                    <TableCell>{serviceEntity?.acceptableDogSizes?.join(', ') || 'N/A'}</TableCell>
                                    <TableCell>{business.phoneNumber}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => navigateToBusinessProfile(business.id)}
                                        >
                                            Business Page
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default BusinessListComponent;

import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Business } from "../models/BusinessModels/BusinessModel";
import { BUSINESS_TYPES } from "../models/Enums/Enums";
import { useRouter } from "../routes/hooks";
import { Button, Dialog, Grid, Typography, Container, Box, CircularProgress } from "@mui/material";
import BusinessFrame from "../Sections/User/Business/Profile/BusinessFrame";
import BookAnAppointment from "../Sections/User/Business/Profile/BookAnAppointment";
import ReviewForm from "../Sections/User/Business/Reviews/ReviewForm";
import TestimonialsContainer from "../Sections/User/Business/Profile/TestimonialsContainer";

type RouteParams = Record<string, string | undefined>;

const BusinessProfilePage: FunctionComponent = () => {
    const { id: businessId } = useParams<RouteParams>();
    const [business, setBusiness] = useState<Business | null>(null);
    const router = useRouter();
    const [selectedService, setSelectedService] = useState<BUSINESS_TYPES>(BUSINESS_TYPES.BOARDING);
    const [reviewFormOpen, setReviewFormOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/business/${businessId}`);
                const data = await response.json();
                setBusiness(data);
                setSelectedService(data.boardingEntity ? BUSINESS_TYPES.BOARDING : data.dogWalkerEntity ? BUSINESS_TYPES.DOG_WALK : data.dogSitterEntity ? BUSINESS_TYPES.DOG_SITTER : BUSINESS_TYPES.DAY_CARE);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [businessId]);

    useEffect(() => {
        if (business) {
            const allServicesNull = !business.boardingEntity && !business.dogWalkerEntity && !business.dogSitterEntity && !business.dayCareEntity;
            if (allServicesNull) {
                router.push("/");
            }
        }
    }, [business, router]);

    if (!business) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    const availableServices = [
        { type: BUSINESS_TYPES.BOARDING, data: business.boardingEntity, text: "Boarding", icon: "/icon--moon.svg" },
        { type: BUSINESS_TYPES.DOG_WALK, data: business.dogWalkerEntity, text: "Walker", icon: "/icon--walk.svg" },
        { type: BUSINESS_TYPES.DOG_SITTER, data: business.dogSitterEntity, text: "Sitter", icon: "/icon--bed.svg" },
        { type: BUSINESS_TYPES.DAY_CARE, data: business.dayCareEntity, text: "Day Care", icon: "/icon--sun1.svg" }
    ].filter(service => service.data !== null);

    const getServiceData = () => {
        const service = availableServices.find(service => service.type === selectedService);
        return service ? service.data : null;
    };

    const handleReviewSubmit = (review: string, rating: number) => {
        console.log('Review submitted:', review, rating);
    };

    return (
        <Container>
            <Box mt={4} mb={4}>
                <Typography variant="h3" gutterBottom align="center">
                    Business Profile
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12}>
                        <BusinessFrame business={business} serviceData={getServiceData()} selectedService={selectedService} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom align="center">
                            Our Services
                        </Typography>
                        <Box display="flex" flexDirection="row" gap={2} justifyContent="center" alignItems="center" mb={4}>
                            {availableServices.map(service => (
                                <Button
                                    key={service.type}
                                    onClick={() => setSelectedService(service.type)}
                                    variant={selectedService === service.type ? 'contained' : 'outlined'}
                                    color={selectedService === service.type ? 'primary' : 'secondary'}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '8px',
                                        textTransform: 'none',
                                        borderRadius: '30px',
                                        fontFamily: 'Inter',
                                        fontSize: '16px',
                                        fontWeight: 'regular',
                                        color: selectedService === service.type ? 'white' : 'black',
                                        borderColor: selectedService !== service.type ? 'grey.500' : 'primary.main',
                                        backgroundColor: selectedService === service.type ? '#006CBF' : 'transparent',
                                        '&:hover': {
                                            borderColor: selectedService !== service.type ? 'grey.700' : '#006CBF',
                                            backgroundColor: selectedService === service.type ? '#0056A4' : 'transparent',
                                        },
                                    }}
                                >
                                    <Box display="flex" alignItems="center" justifyContent="center" mr={1}>
                                        <img
                                            src={service.icon}
                                            alt={service.text}
                                            className={`icon-${selectedService === service.type ? "white" : "grey"}`}
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </Box>
                                    {service.text}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" mb={4}>
                            <BookAnAppointment business={business} selectedService={selectedService} />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <TestimonialsContainer businessId={Number(businessId)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center" mb={2}>
                            <Button variant="contained" color="primary" onClick={() => setReviewFormOpen(true)}>
                                Write a Review
                            </Button>
                        </Box>
                        <Dialog open={reviewFormOpen} onClose={() => setReviewFormOpen(false)}>
                            <ReviewForm
                                open={reviewFormOpen}
                                onClose={() => setReviewFormOpen(false)}
                                onSubmit={handleReviewSubmit}
                                businessId={Number(businessId)}
                                availableServices={availableServices.map(service => service.type)}
                            />
                        </Dialog>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default BusinessProfilePage;

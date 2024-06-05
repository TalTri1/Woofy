import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Business } from "../models/BusinessModels/BusinessModel";
import { BUSINESS_TYPES } from "../models/Enums/Enums";
import { useRouter } from "../routes/hooks";
import { Button, Dialog, Grid, Typography, Container, Box, CircularProgress } from "@mui/material";
import Navbar from "../Sections/Home/NavbarPreLogin";
import BusinessFrame from "../Sections/User/Business/Profile/BusinessFrame";
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
        <Box
            sx={{
                width: '100%',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
            }}
        >
            <Navbar />
            <Box
                component="main"
                sx={{
                    width: '100%',
                    backgroundColor: 'background-color-primary',
                    pt: 9,
                    px: 5,
                    pb: 7.5,
                    gap: 10.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    boxSizing: 'border-box',
                    '@media (max-width: 1275px)': {
                        pt: 3,
                        pb: 5,
                    },
                    '@media (max-width: 750px)': {
                        gap: 5.25,
                        px: 2.5,
                    },
                    '@media (max-width: 1100px)': {
                        pt: 2.5,
                        pb: 3.125,
                    },
                    '@media (max-width: 450px)': {
                        gap: 2.625,
                        pb: 1.25,
                    },
                }}
            >
               
                <Box>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12}>
                            <BusinessFrame business={business} serviceData={getServiceData()} selectedService={selectedService} setSelectedService={setSelectedService} />
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
            </Box>
        </Box>
    );
}

export default BusinessProfilePage;

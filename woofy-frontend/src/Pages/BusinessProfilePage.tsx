import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessFrame from "../Sections/User/Business/Profile/BusinessFrame";
import TestimonialsContainer from "../Sections/User/Business/Profile/TestimonialsContainer";
import { Business } from "../models/BusinessModels/BusinessModel";
import { BUSINESS_TYPES } from "../models/Enums/Enums";
import { useRouter } from "../routes/hooks";
import Button from "@mui/material/Button";
import BookAnAppointment from "../Sections/User/Business/Profile/BookAnAppointment";
import ReviewForm from "../Sections/User/Business/Reviews/ReviewForm";
import { Dialog } from "@mui/material";


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
        return <div>Loading...</div>;
    }

    const availableServices = [
        { type: BUSINESS_TYPES.BOARDING, data: business.boardingEntity },
        { type: BUSINESS_TYPES.DOG_WALK, data: business.dogWalkerEntity },
        { type: BUSINESS_TYPES.DOG_SITTER, data: business.dogSitterEntity },
        { type: BUSINESS_TYPES.DAY_CARE, data: business.dayCareEntity }
    ].filter(service => service.data !== null);


    const getServiceData = () => {
        const service = availableServices.find(service => service.type === selectedService);
        return service ? service.data : null;
    };

    const handleReviewSubmit = (review: string, rating: number) => {
        // TODO: Implement the functionality to submit the review
        console.log('Review submitted:', review, rating);
    };

    return (
        <div>
            <main>
                <section
                    className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full text-center text-13xl text-text-primary font-text-medium-normal mq750:gap-[40px] mq450:gap-[20px]">
                    <div className="flex flex-row justify-between mb-4 w-full">
                        <h3>Our Services</h3>
                        <div className="flex flex-row gap-4">
                            {availableServices.map(service => (
                                <Button
                                    key={service.type}
                                    onClick={() => setSelectedService(service.type)}
                                    variant="contained"
                                    color={selectedService === service.type ? 'primary' : 'secondary'}
                                >
                                    {service.type}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <BusinessFrame business={business} serviceData={getServiceData()}
                        selectedService={selectedService} />
                    <div>
                        <Button variant="contained" color="primary" onClick={() => setReviewFormOpen(true)}>Write a review</Button>
                        <Dialog open={reviewFormOpen} onClose={() => setReviewFormOpen(false)}>
                            <ReviewForm
                                open={reviewFormOpen}
                                onClose={() => setReviewFormOpen(false)}
                                onSubmit={handleReviewSubmit}
                                businessId={Number(businessId)}
                                availableServices={availableServices.map(service => service.type)}  // pass availableServices as a prop
                            /></Dialog>
                    </div>
                </section>
                <BookAnAppointment business={business} selectedService={selectedService} />
                <TestimonialsContainer businessId={Number(businessId)} />
            </main>
        </div>
    );
};

export default BusinessProfilePage;

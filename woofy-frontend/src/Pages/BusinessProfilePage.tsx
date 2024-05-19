import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BusinessFrame from "../Sections/User/Business/Profile/BusinessFrame";
import TestimonialsContainer from "../Sections/User/Business/Profile/TestimonialsContainer";
import { Business } from "../models/BusinessModels/BusinessModel";
import { BUSINESS_TYPES } from "../models/Enums/Enums";
import { useRouter } from "../routes/hooks";
import Button from "@mui/material/Button";
import BookAnAppointment from "../Sections/User/Business/Profile/BookAnAppointment";


type RouteParams = Record<string, string | undefined>;

const BusinessProfilePage: FunctionComponent = () => {
    const { id } = useParams<RouteParams>();
    const [business, setBusiness] = useState<Business | null>(null);
    const router = useRouter();
    const [selectedService, setSelectedService] = useState<BUSINESS_TYPES>(BUSINESS_TYPES.BOARDING);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/business/${id}`);
                const data = await response.json();
                setBusiness(data);
                setSelectedService(data.boardingEntity ? BUSINESS_TYPES.BOARDING : data.dogWalkerEntity ? BUSINESS_TYPES.DOG_WALK : data.dogSitterEntity ? BUSINESS_TYPES.DOG_SITTER : BUSINESS_TYPES.DAY_CARE);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

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

    return (
        <div className="w-full relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
            <main
                className="self-stretch bg-text-alternate overflow-hidden flex flex-col items-start justify-start py-20 px-16 box-border gap-[122px] max-w-full lg:pt-[34px] lg:pb-[34px] lg:box-border mq750:gap-[61px] mq750:py-[22px] mq750:px-8 mq750:box-border mq450:gap-[30px]">
                <div
                    className="w-[616px] h-px relative bg-text-primary box-border hidden max-w-full border-[1px] border-solid border-color-neutral-neutral" />
                <div className="w-[616px] hidden max-w-full" />
                <div
                    className="w-[616px] h-px relative bg-text-primary box-border hidden max-w-full border-[1px] border-solid border-color-neutral-neutral" />
                <div
                    className="w-[616px] h-px relative bg-text-primary box-border hidden max-w-full border-[1px] border-solid border-color-neutral-neutral" />
                <section
                    className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[80px] max-w-full text-center text-13xl text-text-primary font-text-medium-normal mq750:gap-[40px] mq450:gap-[20px]">
                    <div className="flex flex-row gap-4 mb-4 justify-end w-full">
                        <h3>Our Services</h3>
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
                    <BusinessFrame business={business} serviceData={getServiceData()}
                        selectedService={selectedService} />
                </section>
                <BookAnAppointment business={business} selectedService={selectedService} />
                <TestimonialsContainer />
            </main>
        </div>
    );
};

export default BusinessProfilePage;

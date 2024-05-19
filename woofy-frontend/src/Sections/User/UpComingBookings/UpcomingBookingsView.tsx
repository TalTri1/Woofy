import React, { FunctionComponent, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import UpcomingBookingCard from "./UpcomingBookingCard";
import SelectServiceTypeComponent from "../selectButtons/SelectServiceTypeComponent";
import { BUSINESS_TYPES } from "../../../models/Enums/Enums";


const UpComingBookings: FunctionComponent = () => {
    const [selectedServices, setSelectedServices] = useState<BUSINESS_TYPES | null>(null);

    const handleViewAll = () => {
        setSelectedServices(null);
    };

    const bookings = [
        { type: BUSINESS_TYPES.BOARDING, icon: "/boarding-icon--moon.svg", dayCare: "Boarding" },
        { type: BUSINESS_TYPES.DAY_CARE, icon: "/icon--sun.svg", dayCare: "Day Care" },
        { type: BUSINESS_TYPES.DOG_SITTER, icon: "/sitting-icon--bed.svg", dayCare: "Sitting" },
        { type: BUSINESS_TYPES.DOG_WALK, icon: "/walking-icon--walk.svg", dayCare: "Walking" },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                pt: { xs: 2, lg: 8 },
                pb: { xs: 1, lg: 5 },
                gap: 2,
                maxWidth: "100%",
                textAlign: "center",
                typography: "h3",
                color: "text.primary",
            }}
        >
            <Box sx={{ width: "100%", maxWidth: "768px", textAlign: "center" }}>
                <Typography variant="h1" sx={{ fontSize: { xs: "2rem", lg: "4rem" }, fontWeight: "bold" }}>
                    Upcoming Bookings
                </Typography>
            </Box>

            <Box sx={{ width: "100%", maxWidth: "768px", display: "flex", flexDirection: "row", alignItems: "center", gap: 2, mb: 2 }}>
                <SelectServiceTypeComponent setSelectedServices={setSelectedServices} selectedServices={selectedServices} labelText="Choose a service" />
                <Button onClick={handleViewAll} variant="outlined" sx={{ borderRadius: "24px" }}>
                    View All
                </Button>
            </Box>

            <Box sx={{ width: "100%", maxWidth: "768px", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderBottom: 1,
                        borderColor: "text.primary",
                        pb: 2,
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, width: "100%", maxWidth: "768px" }}>
                        {bookings
                            .filter(booking => selectedServices === null || booking.type === selectedServices)
                            .map(booking => (
                                <UpcomingBookingCard key={booking.type} dayCareIconSun={booking.icon} dayCare={booking.dayCare} />
                            ))}
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                    <Button variant="outlined" sx={{ borderRadius: "24px" }}>
                        Show More
                    </Button>
                    <Button variant="outlined" sx={{ borderRadius: "24px" }}>
                        Show Less
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UpComingBookings;
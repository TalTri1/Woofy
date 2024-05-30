import React, { FunctionComponent, useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { BUSINESS_TYPES } from "../../../../models/Enums/Enums";
import SelectServiceTypeComponent from "../../selectButtons/SelectServiceTypeComponent";
import UpcomingBookingCard from "../../UpComingBookings/UpcomingBookingCard";
import axios from "axios";
import {getImage} from "../../../../components/image/imageComponent";
import api from "../../../../api/api";

const CustomerUpComingBookings: FunctionComponent = () => {
    const [selectedServices, setSelectedServices] = useState<BUSINESS_TYPES | null>(null);
    const [bookings, setBookings] = useState([]);
    const [displayedBookings, setDisplayedBookings] = useState(3);

    const handleViewAll = () => {
        setSelectedServices(null);
    };

    const handleShowMore = () => {
        setDisplayedBookings(prev => prev + 3);
    };

    const handleShowLess = () => {
        setDisplayedBookings(prev => (prev - 3 < 3 ? 3 : prev - 3));
    };

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await api.get("appointment/get-all");
                const bookingsWithImages = await Promise.all(
                    res.data.map(async (booking) => {
                        const profileImage = await getImage(booking.profilePhotoID);
                        return {
                            ...booking,
                            profileImage,
                        };
                    })
                );
                setBookings(bookingsWithImages);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        fetchBookings();
    }, []);

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
                            .filter(booking => selectedServices === null || booking.businessType === selectedServices)
                            .slice(0, displayedBookings)
                            .map(booking => (
                                <UpcomingBookingCard
                                    key={booking.id} // Ensure each booking has a unique key
                                    icon={getIconForType(booking.businessType)}
                                    businessType={booking.businessType}
                                    businessName={booking.businessName}
                                    address={booking.address}
                                    city={booking.city}
                                    date={booking.date}
                                    endDate={booking.endDate} // Pass endDate for boarding
                                    startTime={booking.startTime}
                                    profileImage={booking.profileImage}
                                />
                            ))}
                    </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                    {displayedBookings < bookings.length && (
                        <Button onClick={handleShowMore} variant="outlined" sx={{ borderRadius: "24px" }}>
                            Show More
                        </Button>
                    )}
                    {displayedBookings > 3 && (
                        <Button onClick={handleShowLess} variant="outlined" sx={{ borderRadius: "24px" }}>
                            Show Less
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

// Helper function to get icon based on business type
const getIconForType = (type) => {
    switch (type) {
        case BUSINESS_TYPES.BOARDING:
            return "/boarding-icon--moon.svg";
        case BUSINESS_TYPES.DAY_CARE:
            return "/icon--sun.svg";
        case BUSINESS_TYPES.DOG_SITTER:
            return "/sitting-icon--bed.svg";
        case BUSINESS_TYPES.DOG_WALK:
            return "/walking-icon--walk.svg";
        default:
            return "/placeholder-image@2x.png";
    }
};

export default CustomerUpComingBookings;
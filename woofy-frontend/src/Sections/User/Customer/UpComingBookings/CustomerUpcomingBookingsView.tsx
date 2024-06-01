import React, {FunctionComponent, useState, useEffect} from "react";
import {Box, Button, Typography} from "@mui/material";
import {BUSINESS_TYPES} from "../../../../models/Enums/Enums";
import SelectServiceTypeComponent from "../../selectButtons/SelectServiceTypeComponent";
import UpcomingBookingCard from "../../UpComingBookings/UpcomingBookingCard";
import {getImage} from "../../../../components/image/imageComponent";
import api from "../../../../api/api";
import defaultProfilePicture from "../../../../../public/avatar-image@2x.png";

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
                        if (!booking.profilePhotoID) return {
                            ...booking,
                            profileImage: defaultProfilePicture,
                        };
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
            className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-12 px-5 pb-8 box-border gap-5 max-w-full text-center text-4xl text-text-primary font-medium">
            <Box className="w-full max-w-[768px] flex flex-col items-start justify-start">
                <Box className="self-stretch flex flex-col items-center justify-start">
                    <Typography variant="h1" className="m-0 self-stretch text-4xl leading-12 font-bold">
                        Upcoming Bookings
                    </Typography>
                </Box>
            </Box>

            <Box className="w-full max-w-[768px] flex flex-row items-center justify-center gap-5 mb-5"
                 sx={{alignItems: "center"}}>
                <SelectServiceTypeComponent setSelectedServices={setSelectedServices}
                                            selectedServices={selectedServices}/>
                <Button
                    onClick={handleViewAll}
                    variant={selectedServices === null ? "contained" : "outlined"}
                    sx={{
                        marginRight: 10,
                        marginTop: 2,
                        width: '130px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textTransform: 'none',
                        borderRadius: '30px',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontWeight: 'regular',
                        color: selectedServices === null ? 'white' : 'black',
                        borderColor: selectedServices !== null ? 'grey.500' : 'primary.main',
                        backgroundColor: selectedServices === null ? '#006CBF' : 'transparent',
                        '&:hover': {
                            borderColor: selectedServices !== null ? 'grey.700' : '#006CBF',
                            backgroundColor: selectedServices === null ? '#0056A4' : 'transparent',
                        },
                    }}
                >
                    <Box
                        className={`ServiceTypeButtonText ${selectedServices === null ? "white-text" : ""}`}
                        sx={{marginLeft: 0, whiteSpace: 'nowrap'}}
                    >
                        View All
                    </Box>
                </Button>
            </Box>

            <Box className="w-full max-w-[768px] flex flex-col items-center justify-center gap-7 text-left text-xl">
                <Box
                    className="self-stretch flex flex-col items-start justify-start border-b border-solid border-text-primary pb-7">
                    <Box
                        className="self-stretch flex flex-col items-center justify-start gap-8 max-w-full border-t border-solid border-gray-500 pt-7">
                        {bookings
                            .filter(booking => selectedServices === null || booking.businessType === selectedServices)
                            .slice(0, displayedBookings)
                            .map(booking => (
                                <UpcomingBookingCard
                                    key={booking.id}
                                    icon={getIconForType(booking.businessType)}
                                    businessType={booking.businessType}
                                    businessName={booking.businessName}
                                    address={booking.address}
                                    city={booking.city}
                                    date={booking.date}
                                    endDate={booking.endDate}
                                    startTime={booking.startTime}
                                    profileImage={booking.profileImage}
                                />
                            ))}
                    </Box>
                </Box>

                <Box className="flex flex-row gap-5">
                    {displayedBookings < bookings.length && (
                        <Button onClick={handleShowMore} variant="outlined"
                                className="rounded-11xl border border-solid border-gray-300 hover:bg-gray-500 hover:border-gray-100">
                            Show More
                        </Button>
                    )}
                    {displayedBookings > 3 && (
                        <Button onClick={handleShowLess} variant="outlined"
                                className="rounded-11xl border border-solid border-gray-300 hover:bg-gray-500 hover:border-gray-100">
                            Show Less
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

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

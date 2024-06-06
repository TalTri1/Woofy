import React, { FunctionComponent, useMemo, CSSProperties, useState } from "react";
import { Box, Typography, Button, Dialog } from "@mui/material";
import ReviewForm from "../Business/Reviews/ReviewForm";
import { BUSINESS_TYPES } from "../../../models/Enums/Enums";

export type PastBookingCardType = {
    businessId: number;
    icon: string;
    businessType: BUSINESS_TYPES;
    businessName: string;
    address: string;
    city: string;
    date?: string;
    endDate?: string;
    startTime?: string;
    profileImage?: string;
    /** Style props */
    propMinWidth?: CSSProperties["minWidth"];
    serviceTagWidth?: CSSProperties["width"];
    serviceTagHeight?: CSSProperties["height"];
    businessTypeWidth?: CSSProperties["width"];
};

const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

const CustomerPastBookingCard: FunctionComponent<PastBookingCardType> = ({
                                                                     businessId,
                                                                     icon,
                                                                     businessType,
                                                                     businessName,
                                                                     address,
                                                                     city,
                                                                     date,
                                                                     endDate,
                                                                     startTime,
                                                                     profileImage,
                                                                     propMinWidth,
                                                                     serviceTagWidth,
                                                                     serviceTagHeight,
                                                                     businessTypeWidth,
                                                                 }) => {
    const [reviewFormOpen, setReviewFormOpen] = useState(false);

    const businessTypeStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth,
            width: businessTypeWidth,
        };
    }, [propMinWidth, businessTypeWidth]);

    const serviceTagStyle: CSSProperties = useMemo(() => {
        return {
            width: serviceTagWidth,
            height: 30,
            lineHeight: "30px",
        };
    }, [serviceTagWidth]);

    const handleReviewSubmit = (review: string, rating: number) => {
        console.log('Review submitted:', review, rating);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                gap: 2,
                borderColor: "grey.700",
                width: "100%",
                maxWidth: "100%",
                mx: "auto",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                    backgroundColor: "#f5f5f5",
                },
            }}
        >
            <Box
                component="img"
                sx={{
                    height: { xs: 100, md: 144 },
                    width: { xs: 100, md: 144 },
                    borderRadius: "50%",
                    objectFit: "cover",
                }}
                alt="profile"
                src={profileImage || "/placeholder-image@2x.png"}
            />
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", md: "flex-start" },
                    gap: 1,
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: 1,
                    }}
                >
                    <Typography
                        component="b"
                        sx={{
                            fontWeight: "bold",
                            lineHeight: "150%",
                            fontSize: { xs: "1rem", md: "1.25rem" },
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {businessName}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 1,
                            bgcolor: "#006CBF",
                            borderRadius: "24px",
                            color: "white",
                            p: 1,
                            ...serviceTagStyle,
                            minWidth: 120,
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 24,
                                width: 24,
                                objectFit: "cover",
                            }}
                            alt="icon"
                            src={icon}
                        />
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                lineHeight: "150%",
                                fontWeight: "medium",
                                minWidth: 70,
                                ...businessTypeStyle,
                            }}
                        >
                            {formatEnumValue(businessType)}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", md: "flex-start" },
                        gap: 0.5,
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            lineHeight: "150%",
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {businessType === BUSINESS_TYPES.BOARDING ? `${formatDate(date)} - ${formatDate(endDate)}` : formatDate(date)}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            lineHeight: "150%",
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {startTime}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            lineHeight: "150%",
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        {address}, {city}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    width: "100%",
                    mt: { xs: 2, md: 0 },
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        cursor: "pointer",
                        py: "6px",
                        px: "19px",
                        bgcolor: "transparent",
                        borderRadius: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        border: "1px solid",
                        borderColor: "grey.500",
                        "&:hover": {
                            bgcolor: "transparent",
                            borderColor: "grey.700",
                        },
                    }}
                    onClick={() => setReviewFormOpen(true)}
                >
                    <Box
                        component="img"
                        sx={{
                            height: "24px",
                            width: "24px",
                            objectFit: "cover",
                        }}
                        alt="add review"
                        src="/icon--edit.svg"
                    />
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            fontSize: "1rem",
                            lineHeight: "150%",
                            fontFamily: "text.regular",
                            color: "text.primary",
                            textAlign: "left",
                            minWidth: "83px",
                        }}
                    >
                        Add Review
                    </Typography>
                </Button>
                <Dialog open={reviewFormOpen} onClose={() => setReviewFormOpen(false)}>
                    <ReviewForm
                        open={reviewFormOpen}
                        onClose={() => setReviewFormOpen(false)}
                        onSubmit={handleReviewSubmit}
                        businessId={businessId}
                        selectedService={businessType}
                    />
                </Dialog>
            </Box>
        </Box>
    );
};

export default CustomerPastBookingCard;

const formatEnumValue = (value: string | undefined) => {
    if (!value) return '';
    return value.replace(/_/g, ' ').toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
};

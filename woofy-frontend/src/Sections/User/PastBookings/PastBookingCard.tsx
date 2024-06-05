import React, {FunctionComponent, useMemo, CSSProperties, useState} from "react";
import {Box, Typography, Button, Dialog} from "@mui/material";
import {formatEnumValue} from "../../../utils/format-enum-text";
import ReviewForm from "../Business/Reviews/ReviewForm";
import {BUSINESS_TYPES} from "../../../models/Enums/Enums";


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

const PastBookingCard: FunctionComponent<PastBookingCardType> = ({
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
            className="self-stretch box-border flex flex-row flex-wrap items-center justify-center pt-[30px] px-0 pb-2 gap-[32px] max-w-full text-left text-xl text-text-primary font-text-medium-normal border-t-[1px] border-solid border-color-neutral-neutral-dark mq450:gap-[16px]"
            sx={{
                "@media (max-width: 450px)": {
                    gap: "16px",
                },
            }}
        >
            <Box
                component="img"
                sx={{
                    height: "144px",
                    width: "144px",
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
                    alignItems: "start",
                    gap: "16px",
                    minWidth: "385px",
                    maxWidth: "100%",
                    "@media (max-width: 450px)": {
                        minWidth: "100%",
                    },
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        py: 0,
                        pr: "209px",
                        pl: 0,
                        gap: "10px",
                        "@media (max-width: 450px)": {
                            pr: 5,
                        },
                        "@media (max-width: 750px)": {
                            flexWrap: "wrap",
                            pr: "104px",
                        },
                    }}
                >
                    <Typography
                        component="b"
                        sx={{
                            fontWeight: "bold",
                            lineHeight: "150%",
                            minWidth: "50px",
                            "@media (max-width: 450px)": {
                                fontSize: "1rem",
                                lineHeight: "24px",
                            },
                        }}
                    >
                        {businessName}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "5px",
                            bgcolor: "#006CBF",
                            borderRadius: "24px",
                            color: "white",
                            py: 1,
                            px: 2,
                            ...serviceTagStyle,
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: "24px",
                                width: "24px",
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
                                minWidth: "70px",
                                ...businessTypeStyle,
                            }}
                        >
                            {formatEnumValue(businessType)}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "8px",
                        py: 0,
                        pl: 0,
                        pr: "15px",
                        mb: 2,
                        "@media (max-width: 450px)": {
                            pr: 5,
                        },
                        "@media (max-width: 750px)": {
                            flexWrap: "wrap",
                            pr: "205px",
                        },
                    }}
                >
                    {businessType === BUSINESS_TYPES.BOARDING ? (
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                minWidth: "38px",
                                lineHeight: "150%",
                            }}
                        >
                            {formatDate(date)} - {formatDate(endDate)}
                        </Typography>
                    ) : (
                        <Typography
                            variant="body2"
                            component="div"
                            sx={{
                                minWidth: "38px",
                                lineHeight: "150%",
                            }}
                        >
                            {formatDate(date)}
                        </Typography>
                    )}
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            fontSize: "0.875rem",
                            lineHeight: "150%",
                            minWidth: "5px",
                            mx: 1,
                        }}
                    >
                        •
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            minWidth: "38px",
                            lineHeight: "150%",
                        }}
                    >
                        {startTime}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            fontSize: "0.875rem",
                            lineHeight: "150%",
                            minWidth: "5px",
                            mx: 1,
                        }}
                    >
                        •
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{
                            minWidth: "38px",
                            lineHeight: "150%",
                        }}
                    >
                        {address}, {city}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        py: 0,
                        px: "15px",
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
        </Box>
    );
};

export default PastBookingCard;

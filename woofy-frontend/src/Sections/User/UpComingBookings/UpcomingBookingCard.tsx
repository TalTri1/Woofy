import React, { FunctionComponent, useMemo, CSSProperties } from "react";
import { Box, Button, Typography } from "@mui/material";
import {formatEnumValue} from "../../../utils/format-enum-text";

export type UpcomingBookingCardType = {
    icon?: string;
    businessType?: string;
    businessName?: string;
    address?: string;
    city?: string;
    date?: string;
    endDate?: string;
    startTime?: string;
    profileImage?: string;
    /** Style props */
    propMinWidth?: CSSProperties["minWidth"];
    serviceTagWidth?: CSSProperties["width"];
    businessTypeWidth?: CSSProperties["width"];
};

const UpcomingBookingCard: FunctionComponent<UpcomingBookingCardType> = ({
                                                                             icon,
                                                                             businessType,
                                                                             businessName,
                                                                             address,
                                                                             city,
                                                                             date,
                                                                             endDate, // Destructure endDate
                                                                             startTime,
                                                                             profileImage,
                                                                             propMinWidth,
                                                                             serviceTagWidth,
                                                                             businessTypeWidth,
                                                                         }) => {
    const businessTypeStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth,
            width: businessTypeWidth,
        };
    }, [propMinWidth, businessTypeWidth]);

    const serviceTagStyle: CSSProperties = useMemo(() => {
        return {
            width: serviceTagWidth,
        };
    }, [serviceTagWidth]);

    const isTimeVisible = businessType !== "BOARDING" && businessType !== "DAY_CARE";
    const isEndDateVisible = businessType === "BOARDING";

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                pt: 4,
                px: 0,
                pb: 2,
                gap: 4,
                maxWidth: "100%",
                textAlign: "left",
                borderTop: 1,
                borderColor: "neutral.dark",
            }}
        >
            <Box
                component="img"
                sx={{ height: 144, width: 144, borderRadius: "50%", objectFit: "cover" }}
                alt="profile"
                src={profileImage}
            />
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 2,
                    minWidth: 385,
                    maxWidth: "100%",
                }}
            >
                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "start" }}>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 2,
                            pb: 1,
                            flexWrap: { xs: "wrap", md: "nowrap" },
                            pr: { xs: 1, md: 2 },
                        }}
                    >
                        <Typography variant="body1" component="b" sx={{ minWidth: 10 }}>
                            {businessName}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "start",
                                py: 0.5,
                                px: 1,
                                gap: 1,
                                bgcolor: "primary.main",
                                borderRadius: "24px",
                                color: "white",
                                ...serviceTagStyle,
                            }}
                        >
                            <Box
                                component="img"
                                sx={{ height: 24, width: 24, objectFit: "cover" }}
                                alt="icon"
                                src={icon}
                            />
                            <Typography variant="body2" component="div" sx={{ ...businessTypeStyle }}>
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
                            gap: 1,
                            flexWrap: { xs: "wrap", md: "nowrap" },
                            pr: { xs: 1, md: 2 },
                        }}
                    >
                        {isEndDateVisible ? (
                            <Typography variant="body2" component="div" sx={{ minWidth: 38 }}>
                                {date} - {endDate}
                            </Typography>
                        ) : (
                            <Typography variant="body2" component="div" sx={{ minWidth: 38 }}>
                                {date}
                            </Typography>
                        )}
                        {isTimeVisible && (
                            <>
                                <Typography variant="body2" component="div" sx={{ mx: 0.5 }}>
                                    •
                                </Typography>
                                <Typography variant="body2" component="div" sx={{ minWidth: 38 }}>
                                    {startTime ? startTime : "N/A"}
                                </Typography>
                            </>
                        )}
                        <Typography variant="body2" component="div" sx={{ mx: 0.5 }}>
                            •
                        </Typography>
                        <Typography variant="body2" component="div" sx={{ minWidth: 38 }}>
                            {address}, {city}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "end", pr: 2 }}>
                    <Button variant="outlined" sx={{ borderRadius: "24px", display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                            component="img"
                            sx={{ height: 24, width: 24, objectFit: "cover" }}
                            alt="manage"
                            src="/manage-button-icon--editalt.svg"
                        />
                        Manage
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UpcomingBookingCard;

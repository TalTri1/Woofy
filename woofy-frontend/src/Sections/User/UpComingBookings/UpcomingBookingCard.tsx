import React, {FunctionComponent, useMemo, CSSProperties} from "react";
import {Box, Button, Typography} from "@mui/material";

export type UpcomingBookingCardType = {
    dayCareIconSun?: string;
    dayCare?: string;

    /** Style props */
    propMinWidth?: CSSProperties["minWidth"];
    dayCareServiceTagWidth?: CSSProperties["width"];
    dayCareWidth?: CSSProperties["width"];
};

const UpcomingBookingCard: FunctionComponent<UpcomingBookingCardType> = ({
                                                                             dayCareIconSun,
                                                                             dayCare,
                                                                             propMinWidth,
                                                                             dayCareServiceTagWidth,
                                                                             dayCareWidth,
                                                                         }) => {
    const dayCareStyle: CSSProperties = useMemo(() => {
        return {
            minWidth: propMinWidth,
            width: dayCareWidth,
        };
    }, [propMinWidth, dayCareWidth]);

    const dayCareServiceTagStyle: CSSProperties = useMemo(() => {
        return {
            width: dayCareServiceTagWidth,
        };
    }, [dayCareServiceTagWidth]);

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
                sx={{height: 144, width: 144, borderRadius: "50%", objectFit: "cover"}}
                alt="placeholder"
                src="/placeholder-image@2x.png"
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
                <Box sx={{width: "100%", display: "flex", flexDirection: "column", alignItems: "start"}}>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 2,
                            pb: 1,
                            flexWrap: {xs: "wrap", md: "nowrap"},
                            pr: {xs: 1, md: 2},
                        }}
                    >
                        <Typography variant="body1" component="b" sx={{minWidth: 10}}>
                            Business Name
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
                                ...dayCareServiceTagStyle,
                            }}
                        >
                            <Box
                                component="img"
                                sx={{height: 24, width: 24, objectFit: "cover"}}
                                alt="icon"
                                src={dayCareIconSun}
                            />
                            <Typography variant="body2" component="div" sx={{...dayCareStyle}}>
                                {dayCare}
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
                            flexWrap: {xs: "wrap", md: "nowrap"},
                            pr: {xs: 1, md: 2},
                        }}
                    >
                        <Typography variant="body2" component="div" sx={{minWidth: 38}}>
                            Date
                        </Typography>
                        <Typography variant="body2" component="div" sx={{mx: 0.5}}>
                            •
                        </Typography>
                        <Typography variant="body2" component="div" sx={{minWidth: 38}}>
                            Time
                        </Typography>
                        <Typography variant="body2" component="div" sx={{mx: 0.5}}>
                            •
                        </Typography>
                        <Typography variant="body2" component="div" sx={{minWidth: 38}}>
                            Location
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "end", pr: 2}}>
                    <Button variant="outlined"
                            sx={{borderRadius: "24px", display: "flex", alignItems: "center", gap: 1}}>
                        <Box
                            component="img"
                            sx={{height: 24, width: 24, objectFit: "cover"}}
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

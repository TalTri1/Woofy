import React, { FunctionComponent, useMemo, CSSProperties } from "react";
import { Box, Typography, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BUSINESS_TYPES } from "../../../../models/Enums/Enums";

export type UpcomingBookingCardType = {
    icon?: string;
    businessType?: BUSINESS_TYPES;
    customerName?: string;
    date?: string;
    endDate?: string;
    startTime?: string;
    profileImage?: string;
    dogName?: string;
    dogDetails?: {
        dogName: string;
        dogBreed: string;
        age: string;
        size: string;
        trainingLevel: string;
        about: string;
        specialRequirements: string;
    };
    onCancel: () => void;
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

const BusinessUpcomingBookingCard: FunctionComponent<UpcomingBookingCardType> = ({
                                                                                     icon,
                                                                                     businessType,
                                                                                     customerName,
                                                                                     date,
                                                                                     endDate,
                                                                                     startTime,
                                                                                     profileImage,
                                                                                     dogName,
                                                                                     dogDetails,
                                                                                     onCancel,
                                                                                     propMinWidth,
                                                                                     serviceTagWidth,
                                                                                     serviceTagHeight,
                                                                                     businessTypeWidth,
                                                                                 }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [dogDetailsOpen, setDogDetailsOpen] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenDogDetails = () => {
        setDogDetailsOpen(true);
    };

    const handleCloseDogDetails = () => {
        setDogDetailsOpen(false);
    };

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

    return (
        <>
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
                            {customerName}
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
                            {dogName}
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
                    <IconButton onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleOpenDogDetails}>Dog Details</MenuItem>
                        <MenuItem onClick={onCancel}>Cancel Booking</MenuItem>
                    </Menu>
                </Box>
            </Box>

            <Dialog
                open={dogDetailsOpen}
                onClose={handleCloseDogDetails}
                aria-labelledby="dog-details-title"
                aria-describedby="dog-details-description"
            >
                <DialogTitle id="dog-details-title">Dog Details</DialogTitle>
                <DialogContent>
                    <DialogContentText id="dog-details-description">
                        <Typography variant="subtitle1"><b>Name:</b> {dogDetails?.dogName}</Typography>
                        <Typography variant="subtitle1"><b>Breed:</b> {dogDetails?.dogBreed}</Typography>
                        <Typography variant="subtitle1"><b>Age:</b> {formatEnumValue(dogDetails?.age)}</Typography>
                        <Typography variant="subtitle1"><b>Size:</b> {formatEnumValue(dogDetails?.size)}</Typography>
                        <Typography variant="subtitle1"><b>Training Level:</b> {formatEnumValue(dogDetails?.trainingLevel)}</Typography>
                        <Typography variant="subtitle1"><b>About:</b> {dogDetails?.about}</Typography>
                        <Typography variant="subtitle1"><b>Special Requirements:</b> {dogDetails?.specialRequirements}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDogDetails} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default BusinessUpcomingBookingCard;

const formatEnumValue = (value: string | undefined) => {
    if (!value) return '';
    return value.replace(/_/g, ' ').toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
};

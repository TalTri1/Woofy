import { FunctionComponent, useContext } from "react";
import RegisterYourBusinessCTA from "../Sections/User/Business/RegisterYourBusinessCTA";
import { UserContext } from "../provider/UserProvider";
import { Box, Typography } from "@mui/material";
import BusinessUpComingBookings from "../Sections/User/Business/UpComingBookings/BusinessUpcomingBookingsView";

const BusinessDashboard: FunctionComponent = () => {
    const { userDetails } = useContext(UserContext); // The user details

    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                backgroundColor: "text.alternate",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center the main content horizontally
                justifyContent: "start",
                letterSpacing: "normal",
                lineHeight: "normal",
                padding: { xs: 2, sm: 4 }, // Responsive padding for mobile and larger screens
            }}
        >
            <main
                style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center the main content horizontally
                    justifyContent: "start",
                    width: "100%", // Ensure main takes the full width
                    textAlign: "center",
                    fontSize: "29xl",
                    color: "white",
                    fontFamily: "text.medium.normal",
                    boxSizing: "border-box",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "#006cbf",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        pt: { xs: 6, md: 12 }, // Responsive padding for top
                        px: { xs: 2, md: 2.5 },
                        pb: { xs: 4, md: 8.5 }, // Responsive padding for bottom
                        gap: 0,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                            width: "100%",
                            flexWrap: "wrap",
                            "@media (min-width: 750px)": { flexWrap: "wrap" },
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "24px!important", md: "48px!important" }, // Responsive font size
                                lineHeight: "120%",
                                fontFamily: "inter",
                                color: "white",
                                textAlign: "center",
                                position: "relative",
                            }}
                        >
                            Welcome Back,
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "24px!important", md: "48px!important" }, // Responsive font size
                                lineHeight: "120%",
                                fontFamily: "inter",
                                color: "white",
                                textAlign: "center",
                                position: "relative",
                            }}
                        >
                            {userDetails
                                ? userDetails.firstName + " " + userDetails.lastName
                                : "Guest User"}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "start",
                        width: "100%", // Ensure the content box takes the full width
                        maxWidth: { xs: "100%", md: "calc(100% - 312px)" }, // Responsive max width for larger screens
                        textAlign: "center",
                        fontSize: "29xl",
                        color: "text.alternate",
                        fontFamily: "text-medium-normal",
                        px: { xs: 2, md: 5 }, // Responsive padding for sides
                    }}
                >
                    <RegisterYourBusinessCTA />
                    <BusinessUpComingBookings />
                </Box>
            </main>
        </Box>
    );
};

export default BusinessDashboard;

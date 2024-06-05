import { FunctionComponent, useContext } from "react";
import RegisterYourBusinessCTA from "../Sections/User/Business/RegisterYourBusinessCTA";
import { UserContext } from "../provider/UserProvider";
import { Box, Typography } from "@mui/material";
import UpComingBookings from "../Sections/User/UpComingBookings/UpcomingBookingsView";

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
                pt: 12,
                px: 2.5,
                pb: 8.5,
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
                    fontSize: "48px!important",
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
                    fontSize: "48px!important",
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
                maxWidth: "calc(100% - 312px)", // Adjust for sidebar if necessary
                textAlign: "center",
                fontSize: "29xl",
                color: "text.alternate",
                fontFamily: "text-medium-normal",
                px: { md: 5 },
              }}
          >
            <RegisterYourBusinessCTA />
            <UpComingBookings />
          </Box>
        </main>
      </Box>
  );
};

export default BusinessDashboard;

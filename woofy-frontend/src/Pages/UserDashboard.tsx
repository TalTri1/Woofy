import { FunctionComponent, useContext, useEffect, useState } from "react";
import RegisterYourDogCTA from "../Sections/User/Customer/DogRegister/RegisterYourDogCTA";
import { UserContext } from "../provider/UserProvider";
import BusinessListComponent from "../layouts/Appointment/components/BusinessListComponent";
import { Box, Typography } from "@mui/material";
import api from "../api/api";

const UserDashboard: FunctionComponent = () => {
  const { userDetails } = useContext(UserContext); // The user details
  const [hasDog, setHasDog] = useState(false);

  useEffect(() => {
    if (userDetails && userDetails.id) {
        api.post(`dogs/getByUserId`, { id: userDetails.id })
          .then(response => {
            if (response.data) {
              setHasDog(true);
            }
          })
          .catch(error => {
            console.error('Error fetching dog', error);
          });
    }
  }, [userDetails]);

  return (
      <Box
          sx={{
            width: "100%",
            position: "relative",
            backgroundColor: "text.alternate",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
              alignItems: "center",
              justifyContent: "start",
              width: "100%",
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
                width: "100%",
                maxWidth: "calc(100% - 312px)",
                textAlign: "center",
                fontSize: "29xl",
                color: "text.alternate",
                fontFamily: "text-medium-normal",
                px: { md: 5 },
              }}
          >
            {!hasDog && <RegisterYourDogCTA />}
            <BusinessListComponent />
          </Box>
        </main>
      </Box>
  );
};

export default UserDashboard;

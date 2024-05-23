import { FunctionComponent, useContext } from "react";
import RegisterYourBusinessCTA from "../Sections/User/Business/RegisterYourBusinessCTA";
import { UserContext } from "../provider/UserProvider";
import { Box, Typography } from "@mui/material";
import UpComingBookings from "../Sections/User/UpComingBookings/UpcomingBookingsView";

const BusinessDashboard: FunctionComponent = () => {

  const { userDetails } = useContext(UserContext); // The user details


  return (
    <Box sx={{ width: '100%', position: 'absolute', backgroundColor: 'text.alternate', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', letterSpacing: 'normal', lineHeight: 'normal' }}>
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'start', maxWidth: '100%', flexShrink: 0, textAlign: 'center', fontSize: '29xl', color: 'white', fontFamily: 'text.medium.normal', boxSizing: 'border-box' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', maxWidth: 'calc(100% - 312px)', textAlign: 'center', fontSize: '29xl', color: 'text.alternate', fontFamily: 'text-medium-normal', px: { md: 5 } }}>
          <Box sx={{ width: '100%', backgroundColor: '#006cbf', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', pt: 4, px: 2.5, pb: 7.5, gap: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '5px', width: '100%', flexWrap: 'wrap', '@media (min-width: 750px)': { flexWrap: 'wrap' } }}>
              <Typography variant="h1" sx={{ fontSize: '40px!important', lineHeight: '120%', fontFamily: 'inter', color: 'white', textAlign: 'center', position: 'relative' }}>
                Welcome Back,
              </Typography>
              <Typography variant="h1" sx={{ fontSize: '40px!important', lineHeight: '120%', fontFamily: 'inter', color: 'white', textAlign: 'center', position: 'relative' }}>
                {userDetails ? userDetails.firstName + " " + userDetails.lastName : "Guest User"}
              </Typography>
            </Box>
          </Box>
          <RegisterYourBusinessCTA />
          <UpComingBookings />
        </Box>
      </main>
    </Box>
  );
};

export default BusinessDashboard;

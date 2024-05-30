import React, { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import NavbarAfterLogin from "../Sections/User/Business/Profile/NavbarAfterLogin";
import HeroContainer from "../Sections/User/Business/Search/HeroContainer";
import FiltersHeader from "../Sections/User/Business/Search/FiltersHeader";
import Card from "../Sections/User/Business/Search/Card";

const WebSearchPage: FunctionComponent = () => {
  return (
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <NavbarAfterLogin />
      <HeroContainer />
      <Box
        component="main"
        sx={{
          width: '100%',
          backgroundColor: 'background-color-primary',
          pt: 9,
          px: 5,
          pb: 7.5,
          gap: 10.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          boxSizing: 'border-box',
          '@media (max-width: 1275px)': {
            pt: 3,
            pb: 5,
          },
          '@media (max-width: 750px)': {
            gap: 5.25,
            px: 2.5,
          },
          '@media (max-width: 1100px)': {
            pt: 2.5,
            pb: 3.125,
          },
          '@media (max-width: 450px)': {
            gap: 2.625,
            pb: 1.25,
          },
        }}
      >
        <Box
          component="section"
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'start',
            gap: 8,
            pl: 4, 
            '@media (max-width: 750px)': {
              gap: 4,
              pl: 2, 
            },
            '@media (max-width: 450px)': {
              gap: 2,
              pl: 1, 
            },
          }}
        >
          <FiltersHeader />
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              gap: 3,
              width: 'calc(100% - 352px)',
              '@media (max-width: 1100px)': {
                width: '100%',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end', 
                gap: 2.5,
                width: '100%', 
                paddingRight: '96px', 
                '@media (max-width: 450px)': {
                  flexWrap: 'wrap',
                },
              }}
            >
              <Link
                to="/map"
                className="relative flex flex-row items-center justify-center gap-[8px] text-left text-[20px] text-app1 font-inter no-underline" // Increase text size
                style={{ marginRight: 0 }} 
              >
                <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="Map Pin Icon" src="/public/assets/icons/map-pin.svg" />
                <b className="relative leading-[150%]">Show on map</b>
              </Link>
            </Box>

            <Box sx={{ width: '100%', backgroundColor: 'background-color-primary', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '100%',
                  textAlign: 'left', 
                }}
              >
                <Typography
                  sx={{
                    height: '58px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    fontFamily: 'inter',
                    color: 'black',
                    boxSizing: 'border-box',
                    mb: '16px',
                  }}
                >
                  Popular Caregivers Nearby
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
                {[...Array(6)].map((_, index) => (
                  <Card key={index} propFlex="unset" propAlignSelf="stretch" />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#006CBF', 
              py: 1.5, 
              px: 3, 
              borderRadius: '30px', 
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              whiteSpace: 'nowrap',
              color: '#FFFFFF', 
              '&:hover': {
                backgroundColor: 'cornflowerblue', 
              },
            }}
          >
            <div style={{
              fontSize: '16px', 
              fontWeight: 'Bold', 
              fontFamily: 'Inter', 
              textAlign: 'left',
              display: 'inline-block',
              minWidth: '78px',
            }}>
              Show More Results
            </div>
          </Button>

        </Box>
      </Box>
    </Box>
  );
};

export default WebSearchPage;

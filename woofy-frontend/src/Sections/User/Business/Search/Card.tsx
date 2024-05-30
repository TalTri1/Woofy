import React, { FunctionComponent, useMemo, CSSProperties } from "react";
import { Box, Typography, Button } from "@mui/material";

// Custom icon components
const MapIcon = (props: any) => (
  <img 
    src="/icon--map.svg" 
    alt="Location Icon" 
    style={{ width: '24px', height: '24px' }} 
    {...props} 
  />
);

const StarIcon = (props: any) => (
  <img 
    src="/vector.svg" 
    alt="Star Icon" 
    style={{ width: '20px', height: '20px', marginRight: '8px' }} 
    {...props} 
  />
);

const ShekelIcon = (props: any) => (
  <img 
    src="/icon--shekel.svg" 
    alt="Shekel Icon" 
    style={{ width: '24px', height: '24px' }} 
    {...props} 
  />
);

export type CardType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  /** Price prop */
  price?: number;
};

const Card: FunctionComponent<CardType> = ({ propFlex, propAlignSelf, price = 170 }) => {
  const cardStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <Box
      sx={{
        width: '100%', 
        borderRadius: 2,
        backgroundColor: 'background.paper',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1600px', 
        border: '1px solid',
        borderColor: 'grey.300',
        ...cardStyle,
      }}
    >
      <Box
        component="img"
        sx={{
          height: '208px',
          width: '200px',
          objectFit: 'cover',
        }}
        src="/placeholder-image2@2x.png"
        alt="Placeholder"
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          minWidth: '300px', 
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography
            component="h3"
            sx={{
              flex: 1,
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            Business Name / Caregiver Name
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <MapIcon />
          <Typography 
            sx={{ 
              ml: 1, 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '20px', 
              fontWeight: 500 
            }}
          >
            Location
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <StarIcon />
          <Typography 
            sx={{ 
              fontFamily: 'Inter, sans-serif', 
              fontSize: '20px', 
              fontWeight: 500 
            }}
          >
            (4.5 stars) • 100 reviews
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              component="span" 
              sx={{ 
                mr: 1,
                fontFamily: 'Inter, sans-serif', 
                fontSize: '24px',
                fontWeight: 'bold' 
              }}
            >
              {price}
            </Typography>
            <ShekelIcon />
          </Box>
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
              mr: 1, 
              '&:hover': {
                backgroundColor: 'cornflowerblue', 
              },
            }}
          >
            <div style={{
              fontSize: '16px', 
              fontWeight: 'Bold', 
              fontFamily: 'Inter', 
              color: '#FFFFFF', 
              textAlign: 'left',
              display: 'inline-block',
              minWidth: '78px',
            }}>
              Book Now
            </div>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;

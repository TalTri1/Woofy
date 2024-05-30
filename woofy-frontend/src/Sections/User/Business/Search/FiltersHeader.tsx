import React, { useState } from "react";
import { Box, Typography, Checkbox, Divider, Slider, Button } from "@mui/material";

const FiltersHeader: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = useState<number[]>([0, 300]);

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const clearAll = () => {
    setSelectedOptions([]);
    setSliderValue([0, 300]);
  };

  const options = [
    "House",
    "Apartment",
    "Has Fenced Yard",
    "Dogs Allowed on Furniture",
    "Dogs Allowed on Bed",
    "Non-Smoking",
  ];

  const petsOptions = [
    "Own a Dog",
    "Own a Cat",
    "Own Caged Pets",
    "Has Children",
    "Only One Client at a Time",
  ];

  const reviewOptions = ["5 Stars", "4 Stars", "3 Stars"];

  return (
    <Box
      sx={{
        width: '18rem', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        gap: '28px',
        textAlign: 'left',
        fontSize: '1.125rem',
        color: 'black',
        fontFamily: 'text-regular-normal',
        '@media (max-width: 1100px)': {
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          gap: '24px',
          pt: 0,
          px: 0,
          pb: 0,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'space-between',
            gap: '20px',
            fontSize: '2.5rem', 
            width: '100%',
          }}
        >
          <Typography
            sx={{
              margin: 0,
              position: 'relative',
              lineHeight: '34px',
              fontWeight: 'bold',
              fontSize: '24px',
              '@media (max-width: 450px)': {
                fontSize: '1.125rem',
                lineHeight: '27px',
              },
            }}
          >
            Filters
          </Typography>
          <Button
            onClick={clearAll}
            sx={{
              pt: '5px',
              pb: 0,
              fontSize: '1rem',
              fontWeight: 'regular',
              textTransform: 'none',
              color: 'black',
            }}
          >
            Clear all
          </Button>
        </Box>
        <Typography sx={{ lineHeight: '150%', fontSize: '0.875rem' }}>Showing 0 of 100</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'start',
              justifyContent: 'start',
              py: 1.5,
              px: 0,
              width: '100%',
              borderTop: '1px solid',
              borderColor: 'border-primary',
            }}
          >
            <Typography sx={{ flex: 1, lineHeight: '150%', fontWeight: 'bold', fontSize: '18px' }}>Rate Per Service</Typography>
            <Box sx={{ height: '4px', width: '4px', overflow: 'hidden', display: 'none' }} />
          </Box>
          <Box sx={{ width: '100%', px: 3 }}>
            <Slider
              value={sliderValue}
              onChange={(e, newValue) => setSliderValue(newValue as number[])}
              min={0}
              max={300}
              marks={[
                { value: 0, label: '0₪' },
                { value: 300, label: '300₪' },
              ]}
              valueLabelDisplay="auto"
              sx={{
                color: '#006CBF',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#006CBF',
                },
                '& .MuiSlider-track': {
                  backgroundColor: '#006CBF',
                },
                '& .MuiSlider-rail': {
                  backgroundColor: '#d9d9d9',
                },
              }}
            />
          </Box>

        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '8px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'start',
            pt: 1.5,
            pb: 0.625,
            pr: 4,
            pl: 0,
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'border-primary',
          }}
        >
          <Typography sx={{ flex: 1, lineHeight: '150%', fontWeight: 'bold', fontSize: '18px', mt: 1, mb: 0.5 }}>Home Conditions</Typography>
          <Box sx={{ height: '4px', width: '4px', overflow: 'hidden', display: 'none' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '16px', fontSize: '1rem' }}>
          {options.map((condition) => (
            <Box key={condition} sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Checkbox
                checked={selectedOptions.includes(condition)}
                onChange={() => handleOptionChange(condition)}
                sx={{ padding: 0, color: 'rgba(0, 0, 0, 0.54)' }}
              />
              <Typography sx={{ lineHeight: '150%', marginLeft: '4px' }}>{condition}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '8px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'start',
            pt: 1.5,
            pb: 0.625,
            pr: 4,
            pl: 0,
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'border-primary',
          }}
        >
          <Typography sx={{ flex: 1, lineHeight: '150%', fontWeight: 'bold', fontSize: '18px', mt: 1, mb: 0.5 }}>Pets in Home</Typography>
          <Box sx={{ height: '4px', width: '4px', overflow: 'hidden', display: 'none' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '16px', fontSize: '1rem' }}>
          {petsOptions.map((pet) => (
            <Box key={pet} sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Checkbox
                checked={selectedOptions.includes(pet)}
                onChange={() => handleOptionChange(pet)}
                sx={{ padding: 0, color: 'rgba(0, 0, 0, 0.54)' }}
              />
              <Typography sx={{ lineHeight: '150%', marginLeft: '4px' }}>{pet}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '8px', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'start',
            pt: 1.5,
            pb: 1.25,
            pr: 4,
            pl: 0,
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'border-primary',
          }}
        >
          <Typography sx={{ flex: 1, lineHeight: '150%', fontWeight: 'bold', fontSize: '18px', mt: 1, mb: 0.5 }}>Review Score</Typography>
          <Box sx={{ height: '4px', width: '4px', overflow: 'hidden', display: 'none' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: '16px', fontSize: '1rem' }}>
          {reviewOptions.map((score) => (
            <Box key={score} sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Checkbox
                checked={selectedOptions.includes(score)}
                onChange={() => handleOptionChange(score)}
                sx={{ padding: 0, color: 'rgba(0, 0, 0, 0.54)' }}
              />
              <Typography sx={{ lineHeight: '150%', marginLeft: '4px' }}>{score}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'border-primary' }} />
    </Box>
  );
};

export default FiltersHeader;

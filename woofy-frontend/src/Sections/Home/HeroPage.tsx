import React, { FunctionComponent } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export type HeroPageType = {
    className?: string;
};

const HeroPage: FunctionComponent<HeroPageType> = ({ className = "" }) => {
    const navigate = useNavigate();

    return (
        <Box
            component="section"
            sx={{
                width: '100%',
                backgroundColor: 'background-color-primary',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'start',
                maxWidth: '100%',
                textAlign: 'left',
                fontSize: '2.3125rem',
                color: 'text-primary',
                fontFamily: 'text-medium-normal',
                gap: 2,
                padding: { xs: 2, md: 4 },
                overflow: 'hidden',
            }}
            className={className}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: { xs: 'center', lg: 'start' },
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', lg: 'start' },
                        justifyContent: 'center',
                        py: { xs: 8, lg: 16, sm: 12 },
                        px: { lg: 8, sm: 4, md: 6 },
                        gap: 2,
                        minWidth: { lg: '300px' },
                        maxWidth: '100%',
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', gap: 2 }}>
                            <Typography
                                component="h1"
                                sx={{
                                    width: '100%',
                                    textAlign: 'left',
                                    lineHeight: '120%',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '48px', md: '80px' },
                                    fontFamily: 'Inter, sans-serif',
                                    marginLeft: { xs: '0', lg: '100px' },
                                    marginRight: 'auto',
                                    mb: 1.5,
                                }}
                            >
                                <span>Find the</span>
                                <br />
                                <span style={{ color: '#006CBF' }}>perfect care</span>
                                <br />
                                <span>for your</span>
                                <br />
                                <span>furry friend</span>
                            </Typography>
                            <Typography
                                sx={{
                                    width: '100%',
                                    textAlign: 'left',
                                    fontSize: { xs: '18px', md: '24px' },
                                    lineHeight: '150%',
                                    marginLeft: { xs: '0', lg: '100px' },
                                    marginRight: 'auto',
                                }}
                            >
                                <span>Discover trusted dog day cares, overnight</span>
                                <br />
                                <span>boardings, sitters, dog walkers near you.</span>
                                <br />
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'start',
                                    justifyContent: 'start',
                                    gap: 2.5,
                                    marginLeft: { xs: '0', lg: '100px' },
                                    marginRight: 'auto',
                                    mt: 4,
                                }}
                            >
                                <Button
                                    sx={{
                                        cursor: 'pointer',
                                        border: 'none',
                                        py: 2,
                                        px: 4,
                                        backgroundColor: '#006CBF',
                                        borderRadius: '30px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#6495ED',
                                        },
                                    }}
                                    onClick={() => navigate('/search-page')}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '18px',
                                            lineHeight: '120%',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            textAlign: 'left',
                                            minWidth: '50px',
                                        }}
                                    >
                                        Discover
                                    </Typography>
                                </Button>
                                <Button
                                    sx={{
                                        cursor: 'pointer',
                                        py: 2,
                                        px: 4,
                                        backgroundColor: 'transparent',
                                        borderRadius: '30px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textTransform: 'none',
                                        border: '1px solid',
                                        borderColor: 'grey.500',
                                        color: '#444444',
                                        '&:hover': {
                                            backgroundColor: 'grey.100',
                                            borderColor: 'grey.700',
                                        },
                                    }}
                                    onClick={() => navigate('/sign-up')}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '18px',
                                            lineHeight: '120%',
                                            fontWeight: 'bold',
                                            color: 'black',
                                            textAlign: 'left',
                                            minWidth: '50px',
                                        }}
                                    >
                                        Join Now
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component="img"
                    sx={{
                        height: { xs: 'auto', lg: '995px' },
                        width: { xs: '100%', lg: '50%' },
                        objectFit: 'cover',
                        flexShrink: 0,
                        display: { xs: 'block', lg: 'block' },
                    }}
                    loading="lazy"
                    alt="Hero"
                    src="/HeroImage.jpg"
                />
            </Box>
        </Box>
    );
};

export default HeroPage;

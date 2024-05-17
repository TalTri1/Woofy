import React, { ChangeEvent, FunctionComponent } from "react";
import RegistrationModel from "../../models/RegistrationModel";
import ImageComponent from "../../components/image/imageComponent";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';

type RegistrationComponentProps = {
    updateCompleteRegistrationUser: (updatedData: Partial<RegistrationModel>) => void;
    onFileSelect: (file: File) => void;
    DogOwnerOrCareGiveractiveButton: string | null
}

const RegistrationView: FunctionComponent<RegistrationComponentProps> = ({DogOwnerOrCareGiveractiveButton, updateCompleteRegistrationUser, onFileSelect }) => {
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateCompleteRegistrationUser({ [name]: value });
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <ImageComponent onFileSelect={onFileSelect} />
                            </Grid>
                            {DogOwnerOrCareGiveractiveButton == 'caregiver' && (
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="businessName"
                                        label="Business Name"
                                        name="businessName"
                                        autoComplete="business-name"
                                        onChange={changeHandler}
                                    />
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="given-name"
                                    onChange={changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="tel"
                                    onChange={changeHandler}
                                    InputProps={{
                                        startAdornment: <PhoneIcon />,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="address"
                                    label="Permanent Address"
                                    name="address"
                                    autoComplete="address"
                                    onChange={changeHandler}
                                    InputProps={{
                                        startAdornment: <HomeIcon />,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    name="city"
                                    autoComplete="address-level2"
                                    onChange={changeHandler}
                                    InputProps={{
                                        startAdornment: <LocationCityIcon />,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="zipCode"
                                    label="Zip Code"
                                    name="zipCode"
                                    autoComplete="postal-code"
                                    onChange={changeHandler}
                                />
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default RegistrationView;
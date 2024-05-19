import React, { FormEvent, FunctionComponent, useCallback, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationView from "../Sections/LoginAndRegister/RegistrationView";
import api from "../api/api";
import RegistrationModel, { USERTYPE } from "../models/RegistrationModel";
import { useAuth } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useRouter } from "../routes/hooks";
import TextField from "@mui/material/TextField";

const Registration: FunctionComponent = () => {
    const router = useRouter();
    const location = useLocation();
    const { setIsLoggedIn, setToken } = useAuth();
    const basicSignUpUser = location.state;
    const [DogOwnerOrCareGiverActiveButton, setDogOwnerOrCareGiverActiveButton] = useState<string | null>(null);
    const [completeRegistrationUser, setCompleteRegistrationUser] = useState(
        new RegistrationModel(basicSignUpUser, USERTYPE.CUSTOMER, '', '', '', '', '', '', '')
    );

    const updateCompleteRegistrationUser = (updatedData: Partial<RegistrationModel>) => {
        setCompleteRegistrationUser(prevState => ({
            ...prevState,
            ...updatedData
        }));
    };

    const onBackButtonTextClick = useCallback(() => {
        router.push("/sign-up");
    }, [router]);

    const onDogOwnerButtonClick = useCallback(() => {
        setDogOwnerOrCareGiverActiveButton('dogOwner');
        setCompleteRegistrationUser(prevState => {
            const updatedState = { ...prevState, userType: USERTYPE.CUSTOMER };
            return updatedState;
        });
    }, []);

    const onCaregiverButtonClick = useCallback(() => {
        setDogOwnerOrCareGiverActiveButton('caregiver');
        setCompleteRegistrationUser(prevState => {
            const updatedState = { ...prevState, userType: USERTYPE.BUSINESS };
            return updatedState;
        });
    }, []);

    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleFileSelect = (file: File) => {
        setSelectedImage(file);
    };

    const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        const { basicSignUpModel, ...rest } = completeRegistrationUser;
        const apiEndpoint = rest.userType === USERTYPE.BUSINESS ? '/auth/register-business' : '/auth/register-customer';

        try {
            const res = await api.post(`${apiEndpoint}`, {
                ...rest,
                ...basicSignUpModel,
            });
            setToken(res.data.access_token);
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("refreshToken", res.data.refresh_token);
            router.push("/");
            window.scrollTo(0, 0);

            let profilePhotoId = 0;
            try {
                if (selectedImage) {
                    profilePhotoId = await savePhotoToDB(selectedImage);
                    await api.patch('/user/update', {
                        profilePhotoId: profilePhotoId,
                    });
                }
            } catch (error) {
                console.error(`Error uploading image: ${error}`);
            }
            setIsLoggedIn(true);
        } catch (error) {
            toast.error(`Error in registration. Please make sure you have filled all the fields correctly.`);
            if (error instanceof Error) {
                console.error(`Error from the backend: ${error.message}`);
                console.error(`Stack trace: ${error.stack}`);
            } else {
                console.error(`Error from the backend: ${error}`);
            }
        }
    };

    const savePhotoToDB = async (file: File) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await api.post('/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data.imageID;
        } catch (error) {
            toast.error("Failed uploading profile photo");
        }
    };

    return (
        <Container maxWidth="lg">
            <Box
                mt={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="left"
                sx={{
                    backgroundImage: "url('/public/header--54@3x.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '300px',
                    color: 'white',
                }}
            >
                <Typography
        component="h1"
        sx={{
            fontSize: '36px',
            lineHeight: '120%',
            fontFamily: 'Inter',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'left', // Changed to left-aligned
            marginBottom: '20px',
        }}
    >
        Register and start using Woofy
    </Typography>
    <Typography
        sx={{
            fontSize: '16px',
            lineHeight: '150%',
            fontFamily: 'Inter',
            color: 'white',
            textAlign: 'left', // Changed to left-aligned
        }}
    >
        Complete the forms below to provide your contact information and your business details.
    </Typography>
            </Box>
            <form onSubmit={signupHandler}>
                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5">Welcome to Woofy!</Typography>
                    <Typography variant="body1">Please Complete your account information and settings.</Typography>
                </Box>
                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h6">I consider myself a...</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, overflow: 'auto', mt: 2 }}>
                        <Button
                            variant={DogOwnerOrCareGiverActiveButton === 'dogOwner' ? "contained" : "outlined"}
                            onClick={onDogOwnerButtonClick}
                            sx={{
                                width: '130px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textTransform: 'none',
                                borderRadius: '30px',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: 'regular',
                                color: DogOwnerOrCareGiverActiveButton === 'dogOwner' ? 'white' : 'black',
                                borderColor: DogOwnerOrCareGiverActiveButton === 'dogOwner' ? 'primary.main' : 'grey.500',
                                backgroundColor: DogOwnerOrCareGiverActiveButton === 'dogOwner' ? '#006CBF' : 'transparent',
                                '&:hover': {
                                    borderColor: DogOwnerOrCareGiverActiveButton !== 'dogOwner' ? 'grey.700' : '#006CBF',
                                    backgroundColor: DogOwnerOrCareGiverActiveButton === 'dogOwner' ? '#0056A4' : 'transparent',
                                },
                            }}
                        >
                            Dog Owner
                        </Button>
                        <Button
                            variant={DogOwnerOrCareGiverActiveButton === 'caregiver' ? "contained" : "outlined"}
                            onClick={onCaregiverButtonClick}
                            sx={{
                                width: '130px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textTransform: 'none',
                                borderRadius: '30px',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: 'regular',
                                color: DogOwnerOrCareGiverActiveButton === 'caregiver' ? 'white' : 'black',
                                borderColor: DogOwnerOrCareGiverActiveButton === 'caregiver' ? 'primary.main' : 'grey.500',
                                backgroundColor: DogOwnerOrCareGiverActiveButton === 'caregiver' ? '#006CBF' : 'transparent',
                                '&:hover': {
                                    borderColor: DogOwnerOrCareGiverActiveButton !== 'caregiver' ? 'grey.700' : '#006CBF',
                                    backgroundColor: DogOwnerOrCareGiverActiveButton === 'caregiver' ? '#0056A4' : 'transparent',
                                },
                            }}
                        >
                            Caregiver
                        </Button>
                    </Box>
                </Box>
                <Grid container justifyContent="center">
                    <RegistrationView DogOwnerOrCareGiveractiveButton={DogOwnerOrCareGiverActiveButton} updateCompleteRegistrationUser={updateCompleteRegistrationUser} onFileSelect={handleFileSelect} />
                </Grid>
                <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Button
                                variant="outlined"
                                onClick={onBackButtonTextClick}
                                sx={{
                                    mt: 4,
                                    mb: 10,
                                    borderRadius: '30px',
                                    color: '#444444',
                                    borderColor: 'grey.500',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        borderColor: 'grey.700',
                                        backgroundColor: 'transparent',
                                    },
                                    width: '120px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                }}
                            >
                                Back
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{
                                    mt: 4,
                                    mb: 10,
                                    borderRadius: '30px',
                                    backgroundColor: '#006CBF',
                                    '&:hover': {
                                        backgroundColor: '#0056A4',
                                    },
                                    width: '120px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mx: 'auto',
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </form>
        </Container>
    );
};

export default Registration;

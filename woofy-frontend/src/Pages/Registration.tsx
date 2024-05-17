import React, {FormEvent, FunctionComponent, useCallback, useContext, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import RegistrationView from "../Sections/LoginAndRegister/RegistrationView";
import api from "../api/api";
import RegistrationModel, {USERTYPE} from "../models/RegistrationModel";
import {useAuth} from "../provider/AuthProvider";
import {toast} from "react-toastify";
import {Box, Button, Container, Grid, Typography} from '@mui/material';
import {useRouter} from "../routes/hooks";
import TextField from "@mui/material/TextField";


const Registration: FunctionComponent = () => {

    const router = useRouter();
    const location = useLocation();
    const {setIsLoggedIn, setToken} = useAuth();
    const basicSignUpUser = location.state;
    const [DogOwnerOrCareGiverActiveButton, setDogOwnerOrCareGiverActiveButton] = useState<string | null>(null);
    const [completeRegistrationUser, setCompleteRegistrationUser] = useState
    (new RegistrationModel(basicSignUpUser, USERTYPE.CUSTOMER,'', '', '', '', '', '', ''));

    // Function to update completeRegistrationUser
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
            const updatedState = {...prevState, userType: USERTYPE.CUSTOMER};
            return updatedState;
        });
    }, []);


    const onCaregiverButtonClick = useCallback(() => {
        setDogOwnerOrCareGiverActiveButton('caregiver');
        setCompleteRegistrationUser(prevState => {
            const updatedState = {...prevState, userType: USERTYPE.BUSINESS};
            return updatedState;
        });
    }, []);

    // @@@@@@ Handle profile photo @@@@@@ //////////
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleFileSelect = (file: File) => {
        setSelectedImage(file);
    };

    const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        console.log(`e inside signupHandler: ${e}`);

        // Spread the properties of basicSignUpModel into completeRegistrationUser
        const {basicSignUpModel, ...rest} = completeRegistrationUser;

        // Determine the API endpoint based on the user type
        const apiEndpoint = rest.userType === USERTYPE.BUSINESS ? '/auth/register-business' : '/auth/register-customer';

        // API call for the backend for saving the user
        try {
            const res = await api.post(`${apiEndpoint}`, {
                ...rest, // Spread the rest of the properties
                ...basicSignUpModel, // Spread the properties of basicSignUpModel
            });
            console.log(`Response from the backend: ${res}`);
            setToken(res.data.access_token);
            localStorage.setItem("token", res.data.access_token);
            localStorage.setItem("refreshToken", res.data.refresh_token);
            router.push("/");
            window.scrollTo(0, 0);
            // Save the profile photo to the DB if exists
            let profilePhotoId = 0
            try {
                if (selectedImage) {
                    profilePhotoId = await savePhotoToDB(selectedImage); // Save the image and get the ID
                    await api.patch('/user/update', { // Update the user with the profile photo ID
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
            console.log(`Response from the backend: ${response}`);
            return response.data.imageID; // return the ID of the saved image
        } catch (error) {
            toast.error("Failed uploading profile photo")
        }

    };

    return (
            <Container maxWidth="lg">
                <Box
                    mt={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center" // Center vertically
                    textAlign="center" // Center horizontally
                    sx={{
                        backgroundImage: "url('/public/header--54@3x.png')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        minHeight: '300px',
                        color: 'white', // Set text color to white
                    }}
                >
                    <Typography variant="h4">Register and start using Woofy</Typography>
                    <Typography variant="body1">Complete the forms below to provide your contact information and your
                        business details.</Typography>
                </Box>
                <form onSubmit={signupHandler}>
                    <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h5">Welcome to Woofy!</Typography>
                        <Typography variant="body1">Please Complete your account information and settings.</Typography>
                    </Box>
                    <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h6">I consider myself a...</Typography>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant={DogOwnerOrCareGiverActiveButton === 'dogOwner' ? "contained" : "outlined"} color="primary"
                                        onClick={onDogOwnerButtonClick}
                                        sx={{fontSize: '1rem', padding: '10px 20px', margin: '0'}}>Dog Owner</Button>
                            </Grid>
                            <Grid item>
                                <Button variant={DogOwnerOrCareGiverActiveButton === 'caregiver' ? "contained" : "outlined"}
                                        color="primary" onClick={onCaregiverButtonClick}
                                        sx={{fontSize: '1rem', padding: '10px 20px', margin: '0'}}>Caregiver</Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container justifyContent="center">
                        <RegistrationView DogOwnerOrCareGiveractiveButton={DogOwnerOrCareGiverActiveButton} updateCompleteRegistrationUser={updateCompleteRegistrationUser}
                                          onFileSelect={handleFileSelect}/>
                    </Grid>
                    <Box mt={3} display="flex" flexDirection="column" alignItems="center">
                        <Grid container spacing={5} justifyContent="center">
                            <Grid item>
                                <Button variant="outlined" onClick={onBackButtonTextClick}
                                        sx={{fontSize: '1rem', padding: '10px 20px'}}>Back</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" type="submit"
                                        sx={{fontSize: '1rem', padding: '10px 20px'}}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Container>
    );
};

export default Registration;
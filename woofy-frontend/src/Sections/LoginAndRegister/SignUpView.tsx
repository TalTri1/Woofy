import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicSignUpModel from "../../models/UserModels/BasicSignUpModel";
import api from "../../api/api";
import { toast } from "react-toastify";
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
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import woofyLogo from '/assets/logo.png'
import backgroundImage from '/assets/Sign-up-backgroung.jpg';

export default function SignUpModal() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [basicSignUpUser, setUserDetails] = useState(
        new BasicSignUpModel('', '', ''));

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const confirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== basicSignUpUser.password) {
            e.target.setCustomValidity("Passwords do not match");
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
        } else {
            e.target.setCustomValidity("");
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
        }
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));

        switch (name) {
            case 'email':
                const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                setErrors(prevErrors => ({ ...prevErrors, email: emailValid ? '' : 'Invalid email format' }));
                break;
            case 'password':
                setErrors(prevErrors => ({ ...prevErrors, password: value.length >= 8 ? '' : 'Password should be at least 8 characters' }));
                break;
            default:
                break;
        }
    };


    const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formErrors = {
            email: '',
            password: '',
            confirmPassword: ''
        };

        // Check if any of the fields are empty
        if (!basicSignUpUser.email) {
            formErrors.email = 'This field is required';
        }
        if (!basicSignUpUser.password) {
            formErrors.password = 'This field is required';
        }
        if (!basicSignUpUser.confirmPassword) {
            formErrors.confirmPassword = 'This field is required';
        }
        // Check if passwords match
        if (basicSignUpUser.password !== basicSignUpUser.confirmPassword) {
            formErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(formErrors);

        // Only submit the form if there are no errors
        if (!formErrors.email && !formErrors.password && !formErrors.confirmPassword) {
            // Make the Axios request
            try {
                const res = await api.post("auth/check-valid-email", basicSignUpUser);
                console.log(res.data);
                navigate("/registration", { state: basicSignUpUser });
            } catch (error) {
                // pop up that the email is already taken or not valid
                toast.error("Email is already taken");
                console.error("Error occurred while registering user: ", error);
            }
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: 3,
            }}
        >
            <ThemeProvider theme={createTheme()}>
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: -53,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: 2.5,
                            borderRadius: 2,
                            maxWidth: '450px',
                            transform: 'translateX(-500px)'
                        }}
                    >

                        <Avatar src={woofyLogo} sx={{ width: 100, height: 100 }} />

                        <Typography
                            component="h1"
                            sx={{
                                fontSize: '36px',
                                lineHeight: '120%',
                                fontFamily: 'Inter',
                                fontWeight: 'bold',
                                color: 'black',
                                textAlign: 'center',
                                marginTop: '12px',
                                marginBottom: '12px',
                            }}
                        >
                            Get Started
                        </Typography>
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: '16px',
                                lineHeight: '120%',
                                fontFamily: 'Inter',
                                fontWeight: 'regular',
                                color: 'black',
                                textAlign: 'center',
                                marginBottom: '10px',
                            }}
                        >
                            Create an Account and Join Us.
                        </Typography>
                        <Box component="form" noValidate onSubmit={signupHandler} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={basicSignUpUser.email}
                                        onChange={changeHandler}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        autoComplete="new-password"
                                        value={basicSignUpUser.password}
                                        onChange={changeHandler}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton onClick={togglePasswordVisibility}>
                                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type={showPassword ? "text" : "password"}
                                        id="confirmPassword"
                                        autoComplete="new-password"
                                        value={basicSignUpUser.confirmPassword}
                                        onChange={changeHandler}
                                        onInput={confirmPasswordHandler}
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword}
                                        InputProps={{
                                            endAdornment: (
                                                <IconButton onClick={togglePasswordVisibility}>
                                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    mb: 3,
                                    borderRadius: '30px',
                                    backgroundColor: 'app1',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    py: 1,
                                    px: 2,
                                    fontSize: '16px',
                                    fontFamily: 'Inter',
                                    fontWeight: '600',
                                    color: 'text-alternate',
                                    textTransform: 'none',
                                    border: 'none',
                                }}
                            >
                                Sign Up
                            </Button>

                            <Grid container justifyContent="center" sx={{ mt: 4 }}>
                                <Grid item>
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            color: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Already have an account?
                                    </Typography>
                                    {' '}
                                    <Link
                                        href="/Login"
                                        variant="body2"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            color: 'app1',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Box>
    );
};

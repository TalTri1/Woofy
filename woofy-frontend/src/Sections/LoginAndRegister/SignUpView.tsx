import React, {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import BasicSignUpModel from "../../models/UserModels/BasicSignUpModel";
import api from "../../api/api";
import {toast} from "react-toastify";
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
import {createTheme, ThemeProvider} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function SignUpModal() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [basicSignUpUser, setUserDetails] = useState(
        new BasicSignUpModel('', '', ''));

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserDetails(prevState => ({...prevState, [name]: value}));
    };

    const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Make the Axios request
        try {
            const res = await api.post("auth/check-valid-email", basicSignUpUser);
            console.log(res.data);
            navigate("/registration", {state: basicSignUpUser});
        } catch (error) {
            // pop up that the email is already taken or not valid
            toast.error("Email is already taken or not valid");
            console.error("Error occurred while registering user: ", error);
        }
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={signupHandler} sx={{mt: 3}}>
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
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
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
                                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.value !== basicSignUpUser.password) {
                                            e.target.setCustomValidity("Passwords do not match");
                                        } else {
                                            e.target.setCustomValidity("");
                                        }
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
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
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/Login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

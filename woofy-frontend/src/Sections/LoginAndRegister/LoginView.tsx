import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAuth } from "../../provider/AuthProvider";
import { useRouter } from "../../routes/hooks";
import woofyLogo from '/public/assets/logo.png';
import backgroundImage from '/public/assets/sign-in--modal--2@3x.png';

export default function SignInComponent() {
    const theme = createTheme();
    const router = useRouter();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login({
            email: data.get('email') as string,
            password: data.get('password') as string,
        });
        router.push("/");
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
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="sm">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: -25,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255)',
                            padding: 2.5,
                            borderRadius: 2,
                            maxWidth: '450px',
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
                            Sign in
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
                            Welcome back! Sign in here.
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
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
                                        autoComplete="current-password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleClickShowPassword}>
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                                sx={{ mt: 2 }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2.5,
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
                                Sign In
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
                                        Don't have an account?
                                    </Typography>
                                    {' '}
                                    <Link
                                        href="/sign-up"
                                        variant="body2"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                            color: 'app1',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Box>
    );
}

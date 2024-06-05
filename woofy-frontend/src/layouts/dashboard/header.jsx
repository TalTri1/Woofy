import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { UserContext } from '../../provider/UserProvider';
import Typography from '@mui/material/Typography';
import NotificationsPopover from './common/notifications-popover';
import AccountPopover from './common/account-popover';
import { bgBlur } from '../../theme/css';
import { HEADER } from './config-layout';
import Logo from "../../components/logo";
import { RouterLink } from '../../routes/components';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../provider/AuthProvider";

export default function Header({ onOpenNav }) {
    const { userDetails } = useContext(UserContext);
    const theme = useTheme();
    const { token } = useAuth();
    const navigate = useNavigate();

    const renderContent = (
        <>
            <Box component={RouterLink} to="/" sx={{ mt: 3.5, ml: 4, display: 'inline-block' }}>
                <Logo />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            {token ? (
                <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 1.5 }}>
                    <NotificationsPopover />
                    <AccountPopover />
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#222222',
                            fontWeight: '600',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {userDetails ? `${userDetails.firstName} ${userDetails.lastName}` : 'Guest User'}
                    </Typography>
                </Stack>
            ) : (
                <Stack direction="row" alignItems="center" spacing={3} sx={{ mt: 1.5 }}>
                    <Button
                        onClick={() => navigate("/Hero-page")}
                        sx={{
                            textTransform: 'none',
                            color: theme.palette.text.primary,
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        onClick={() => navigate("/search-page")}
                        sx={{
                            textTransform: 'none',
                            color: theme.palette.text.primary,
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        Discover
                    </Button>
                    <Button
                        onClick={() => navigate("/sign-up")}
                        sx={{
                            textTransform: 'none',
                            color: theme.palette.text.primary,
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                        }}
                    >
                        Become a Caregiver
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => navigate("/sign-up")}
                        sx={{
                            borderColor: 'grey.500',
                            '&:hover': {
                                backgroundColor: 'grey.200',
                                borderColor: 'grey.700',
                            },
                        }}
                    >
                        Join now
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/login")}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                        }}
                    >
                        Sign in
                    </Button>
                </Stack>
            )}
        </>
    );

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,

                ...bgBlur({
                    color: theme.palette.background.default,
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: { lg: 5 },
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    onOpenNav: PropTypes.func,
};

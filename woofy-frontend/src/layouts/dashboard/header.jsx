// components/Header.js
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

export default function Header({ onOpenNav }) {
    const { userDetails } = useContext(UserContext);
    const theme = useTheme();

    const renderContent = (
        <>
            <Logo sx={{ mt: 1.5, ml: 4 }} />
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" alignItems="center" spacing={3}>
                <NotificationsPopover />
                <AccountPopover />
                <Typography
                    variant="body1"
                    sx={{
                        color: '#222222',
                        fontWeight: '600', // Semi-bold
                        whiteSpace: 'nowrap'
                    }}
                >
                    {userDetails ? `${userDetails.firstName} ${userDetails.lastName}` : 'Guest User'}
                </Typography>
            </Stack>
        </>
    );

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                mt: 2, // Adding some margin at the top
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

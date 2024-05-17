import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import {RouterLink} from "../../routes/components";
import woofyLogo from '/photo-in-ellipse@2x.png'

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {

  // -------------------------------------------------------
  const logo = (
    <Box
      component="img"
      src={woofyLogo}
      sx={{
        width: 120,
        height: 120,
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        ...sx
      }}
    />
  );


  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;

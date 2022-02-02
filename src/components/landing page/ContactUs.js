import React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  boxAbout: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '128px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '64px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '32px',
    },
  },
  fontTitleAbout: {
    fontWeight: '700 !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
  },
  boxMain: {
    padding: '64px 128px',

    [theme.breakpoints.down('md')]: {
      padding: '24px 32px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '18px 21px',
    },
  },
  boxInformation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function ContactUs() {
  const classes = useStyles();
  return (
    <Box id='contactUs' className={classes.boxMain}>
      <Box className={classes.boxAbout}>
        <Typography
          className={classes.fontTitleAbout}
          variant='h2'
          component='div'
        >
          Contact Us
        </Typography>
      </Box>
      <Box className={classes.boxInformation}>
        <Typography sx={{ my: 4 }} variant='p' component='div'>
          C.R.A.M NFT LLC
        </Typography>
        <Typography sx={{ my: 4 }} variant='p' component='div'>
          L21000506939
        </Typography>
        <Typography sx={{ my: 4 }} variant='p' component='div'>
          NiftyKicksFactory@gmail.com
        </Typography>
        <Typography sx={{ my: 4 }} variant='p' component='div'>
          Carlos Lantigua
        </Typography>
        <Typography sx={{ my: 4 }} variant='p' component='div'>
          Miramar, FL 33025
        </Typography>
        <Typography sx={{ my: 4 }} variant='p' component='div'>
          C: (760) 571-4475{' '}
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactUs;

import React from 'react';
import { Box, Grid, Typography, Link, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Modal
import ModalVideoPlay from '../layout/ModalVideoPlay';

//Icons
import discord from '../../assets/img/discord.svg';
import twitch from '../../assets/img/twitch.svg';
import twitter from '../../assets/img/twitter.svg';

const useStyles = makeStyles((theme) => ({
  root: {},
  boxMain: {
    padding: '0 128px',
    minHeight: '700px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 64px',
    minHeight: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 32px',
    minHeight: '400px',
  },
  textHeader: {
    fontSize: '64px',
    fontWeight: '700',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& span': {
      margin: '0 15px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
      '& span': {
        margin: '0 5px',
      },
    },
  },
  boxButtonVideo: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  buttonPlayVideo: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
    padding: '36px 0',
    '& svg': {
      fontSize: '65px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '24px 0',
    },
    [theme.breakpoints.down('sm')]: {
      '& svg': {
        fontSize: '32px',
      },
    },
  },
  linkHeader: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: '400',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  boxSocialMedia: {
    position: 'fixed',
    top: '40%',
    display: 'flex',
    flexDirection: 'column',
    width: '10%',
  },
  buttonSocialMedia: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '50%',
    width: '65px',
    height: '65px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      svg: {
        color: theme.palette.text.primary,
      },
    },
    [theme.breakpoints.down('md')]: {
      width: '42px',
      height: '42px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '32px',
      height: '32px',
    },
  },
}));

function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{ py: '64px' }}>
        <Grid container className={classes.boxMain} spacing={2}>
          {/* <Grid item xs={12}>
            <Typography
              className={classes.textHeader}
              color='primary'
              variant='p'
            >
              Nifty Kicks{' '}
              <Typography color='text.primary' variant='p'>
                Factory
              </Typography>
            </Typography>
            <br />
          </Grid> */}
        </Grid>
        <Box className={classes.boxSocialMedia}>
          <Link
            href='https://Twitter.com/NiftyKicksio'
            underline='none'
            sx={{ my: 1 }}
            className={classes.buttonSocialMedia}
          >
            <Avatar
              alt='Twitter'
              src={twitter}
              sx={{ width: 24, height: 24 }}
            />
          </Link>
          <Link
            href='#'
            underline='none'
            sx={{ my: 1 }}
            className={classes.buttonSocialMedia}
          >
            <Avatar alt='Twitch' src={twitch} sx={{ width: 24, height: 24 }} />
          </Link>
          <Link
            href='https://discord.gg/niftykicksfactory'
            underline='none'
            sx={{ my: 1 }}
            className={classes.buttonSocialMedia}
          >
            <Avatar
              alt='Discord'
              src={discord}
              sx={{ width: 24, height: 24 }}
            />
          </Link>
        </Box>
      </Box>
      <ModalVideoPlay open={open} handleClose={handleClose} />
    </>
  );
}

export default Header;

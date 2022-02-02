import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const UiText = {
  paragraphes: {
    prgOne: `
      Sneakers have come a long way since the industrial revolution.
      Sneakers, once the symbol of athleticism, have transcended their
      primary function to a fashionable object of desire.`,
    prgTwo: `
      From sportswear and street style to runway fashion, sneakers have
      made their mark as cultural commodities. In the NFT world, Nifty
      Kicks Factory will play a part of people owning the sneakers they
      have always desired in digital form.`,
    prgThree: `
      The sneaker industry has become so big, that an exhibition at
      London’s Design Museum explores how sneakers became an undisputed
      cultural symbol of our times.`,
    prgFore: `
      Now you get to be part of that illustrious history, by joining the
      Sneaker Revolution in the digital space. In Nifty Kicks Factory, you
      - the factory owner - can grow your sneaker factory through three
      different levels. As you advance through each level, you will be
      able to make more production driven NFT’s, leading to higher
      material production and a valuable asset to sell on Atomic Hub.`,
    prgFive: `
      On this journey, with the help of laborers, you will produce raw
      materials such as leather, rubber, and textiles. These materials
      combine with energy from your factory buildings and with the help of
      the cobbler, will allow you to achieve the goal of becoming the
      number 1 factory owner and completing your niftykicksss collection.`,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {},
  boxMain: {
    padding: '64px 128px',
    [theme.breakpoints.down('md')]: {
      padding: '32px 64px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '21px 28px',
    },
  },
  boxHeader: {
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
  fontTitle: {
    fontWeight: '700 !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
  },
  pargAbout: {
    fontSize: '24px',
    [theme.breakpoints.down('md')]: {
      fontSize: '21px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
}));
function About() {
  const classes = useStyles();
  return (
    <Box className={classes.boxMain}>
      <Grid container spacing={2}>
        <Grid items xs={12}>
          <Box className={classes.boxHeader}>
            <Typography
              className={classes.fontTitle}
              variant='h2'
              component='div'
            >
              About
            </Typography>
          </Box>
        </Grid>
        <Grid items xs={12}>
          <Box>
            <Typography
              className={classes.pargAbout}
              sx={{ my: 3 }}
              variant='p'
              component='div'
            >
              {UiText.paragraphes.prgOne}
            </Typography>
            <Typography
              className={classes.pargAbout}
              sx={{ my: 3 }}
              variant='p'
              component='div'
            >
              {UiText.paragraphes.prgTwo}
            </Typography>
            <Typography
              className={classes.pargAbout}
              sx={{ my: 3 }}
              variant='p'
              component='div'
            >
              {UiText.paragraphes.prgThree}
            </Typography>
            <Typography
              className={classes.pargAbout}
              sx={{ my: 3 }}
              variant='p'
              component='div'
            >
              {UiText.paragraphes.prgFore}
            </Typography>
            <Typography
              className={classes.pargAbout}
              sx={{ my: 3 }}
              variant='p'
              component='div'
            >
              {UiText.paragraphes.prgFive}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;

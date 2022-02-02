import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images Factory
import imgLaborersHeader from '../../assets/img/laborers-header.png';
import imgSuiteRubbertaJourneyMan from '../../assets/img/Rubbertajourneyman.png';
import imgSuiteRubberMaster from '../../assets/img/RubberMaster.png';
import imgSuiteRubberApprentice from '../../assets/img/RubberApprentice.png';

import imgSuiteExilApprentice from '../../assets/img/ExilApprentice.png';
import imgSuiteExilJourneyman from '../../assets/img/ExilJourneyman.png';
import imgSuiteExilMaster from '../../assets/img/ExilMaster.png';

import imgSuiteLexApprentice from '../../assets/img/LexApprentice.png';
import imgSuiteLexJourneyman from '../../assets/img/LexJourneyman.png';
import imgSuiteLexMaster from '../../assets/img/LexMaster.png';

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
  dimensionsImageHeader: {
    width: '760px',
    height: '460px',
    marginRight: '130px',
    [theme.breakpoints.down('md')]: {
      width: '560px',
      height: '360px',
      marginRight: '80px',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '80px',
      width: '360px',
      height: '260px',
    },
  },
  boxTextMachine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '172px',
  },
  positionCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Laborers() {
  const classes = useStyles();
  return (
    <Box className={classes.boxMain}>
      <Box className={classes.boxHeader}>
        <Typography className={classes.fontTitle} variant='h2' component='div'>
          Laborers
        </Typography>
      </Box>
      <Box>
        <Grid sx={{ my: '64px' }} container spacing={1}>
          <Grid item xs={12}>
            <Box className={classes.positionCenter}>
              <img
                src={imgLaborersHeader}
                alt='Machine'
                className={classes.dimensionsImageHeader}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid sx={{ my: '64px' }} container spacing={1}>
          <Grid item xs={12} md={12} lg={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} className={classes.positionCenter}>
                <img
                  src={imgSuiteRubbertaJourneyMan}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgSuiteRubberMaster}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <Box className={classes.boxTextMachine}>Rubberta</Box>
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgSuiteRubberApprentice}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} className={classes.positionCenter}>
                <img
                  src={imgSuiteExilApprentice}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgSuiteExilJourneyman}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <Box className={classes.boxTextMachine}>Exil</Box>
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgSuiteExilMaster}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Grid container spacing={4}>
              <Grid item xs={12} className={classes.positionCenter}>
                <img
                  src={imgSuiteLexApprentice}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgSuiteLexJourneyman}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <Box className={classes.boxTextMachine}>Lex</Box>
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgSuiteLexMaster}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Laborers;

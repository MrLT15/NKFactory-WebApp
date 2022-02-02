import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images Factory
import imgMachinesHeader from '../../assets/img/machine-detials.png';

import imgMachineRubberAdvanced from '../../assets/img/RubberAdvanced.png';
import imgMachineRubberModern from '../../assets/img/RubberModern.png';
import imgMachineRubberBasic from '../../assets/img/RubberBasic.png';

import imgMachineLeatherAdvanced from '../../assets/img/LeatherAdvanced.png';
import imgMachineLeatherModern from '../../assets/img/LeatherModern.png';
import imgMachineLeatherBasic from '../../assets/img/LeatherBasic.png';

import imgMachineTextileAdvanced from '../../assets/img/TextileAdvanced.png';
import imgMachineTextileModern from '../../assets/img/TextileModern.png';
import imgMachineTextileBasic from '../../assets/img/TextileBasic.png';

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
    [theme.breakpoints.down('md')]: {
      width: '560px',
      height: '360px',
    },
    [theme.breakpoints.down('sm')]: {
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

function Machines() {
  const classes = useStyles();
  return (
    <Box className={classes.boxMain}>
      <Box className={classes.boxHeader}>
        <Typography className={classes.fontTitle} variant='h2' component='div'>
          Machines
        </Typography>
      </Box>
      <Box>
        <Grid sx={{ my: '64px' }} container spacing={1}>
          <Grid item xs={12}>
            <Box className={classes.positionCenter}>
              <img
                src={imgMachinesHeader}
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
                  src={imgMachineRubberAdvanced}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgMachineRubberBasic}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <Box className={classes.boxTextMachine}>Molding Machine</Box>
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgMachineRubberModern}
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
                  src={imgMachineLeatherAdvanced}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgMachineLeatherBasic}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <Box className={classes.boxTextMachine}>Leather Cutter</Box>
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgMachineLeatherModern}
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
                  src={imgMachineTextileAdvanced}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgMachineTextileBasic}
                  alt='Machine'
                  width='112px'
                  height='172px'
                />
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <Box className={classes.boxTextMachine}>Textle Machine</Box>
              </Grid>
              <Grid item xs={4} className={classes.positionCenter}>
                <img
                  src={imgMachineTextileModern}
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

export default Machines;

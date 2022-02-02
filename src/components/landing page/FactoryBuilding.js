import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images Factory
import imgBuildingGridTwo from '../../assets/img/Industrial-min.png';
import imgBuildingHeader from '../../assets/img/building-details.png';
import imgBuildingGridOne from '../../assets/img/Manufacturing-min.png';

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
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
  },
  dimensionsImageHeader: {
    width: '760px',
    height: '560px',
    [theme.breakpoints.down('md')]: {
      width: '560px',
      height: '360px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '360px',
      height: '260px',
    },
  },
  dimensionsImageContent: {
    width: '660px',
    height: '460px',
    [theme.breakpoints.between('md', 'xl')]: {
      width: '460px',
      height: '360px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '360px',
      height: '260px',
    },
  },
  positionCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function FactoryBuilding() {
  const classes = useStyles();
  return (
    <Box className={classes.boxMain}>
      <Box className={classes.boxHeader}>
        <Typography className={classes.fontTitle} variant='h2' component='div'>
          Factory Building
        </Typography>
      </Box>
      <Box>
        <Grid
          container
          sx={{ minHeight: '700px' }}
          alignItems='center'
          spacing={4}
        >
          <Grid item xs={12}>
            <Box className={classes.positionCenter}>
              <img
                src={imgBuildingHeader}
                alt='Building'
                className={classes.dimensionsImageHeader}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ minHeight: '700px' }} spacing={4}>
          <Grid item xs={12} md={12} lg={6} className={classes.positionCenter}>
            <img
              src={imgBuildingGridOne}
              alt='Buiilding'
              className={classes.dimensionsImageContent}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6} className={classes.positionCenter}>
            <img
              src={imgBuildingGridTwo}
              alt='Buiilding'
              className={classes.dimensionsImageContent}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default FactoryBuilding;

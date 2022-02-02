import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images
import multipleShoes from '../../assets/img/shoes.png';
import greenSticker from '../../assets/img/GreenSticker.png';
import greenShoesNeon from '../../assets/img/GreenShoesNeon.gif';

import shoeOne from '../../assets/img/image011.png';
import shoeTwo from '../../assets/img/image012.png';
import shoeThree from '../../assets/img/image013.png';
import shoeFore from '../../assets/img/image014.png';

const useStyles = makeStyles((theme) => ({
  topText: {
    fontSize: '24px',
    fontWeight: '400',
    [theme.breakpoints.down('md')]: {
      fontSize: '21px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  dimensionsImageFormat: {
    width: '424px',
    height: '224px',
    [theme.breakpoints.down('md')]: {
      width: '324px',
      height: '124px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      height: '112px',
    },
  },
  dimensionsImageFormatShoes: {
    width: '380px',
    height: '224px',
    [theme.breakpoints.down('md')]: {
      width: '324px',
      height: '124px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '250px',
      height: '112px',
    },
  },
  flexPositionCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function ShoesView() {
  const classes = useStyles();
  return (
    <Box sx={{ px: '64px', py: '128px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ my: 5 }}>
            <Typography variant='p' component='div' className={classes.topText}>
              Promo blending will consist of 3 NFT’s of the same sneaker + 1
              Nifty Kicks sticker of the same color.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} className={classes.flexPositionCenter}>
              <img
                src={multipleShoes}
                className={classes.dimensionsImageFormat}
                alt='Building'
              />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.flexPositionCenter}>
              <img
                src={greenSticker}
                className={classes.dimensionsImageFormat}
                alt='Building'
              />
            </Grid>
            <Grid item xs={12} lg={4} className={classes.flexPositionCenter}>
              <img
                src={greenShoesNeon}
                className={classes.dimensionsImageFormat}
                alt='Building'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ my: 5 }}>
            <Typography variant='p' component='div' className={classes.topText}>
              Oliveland Exclusive NFT's can be acquired by digging on Oliveland
              Dig.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={3} className={classes.flexPositionCenter}>
              <img
                src={shoeOne}
                className={classes.dimensionsImageFormatShoes}
                alt='Building'
              />
            </Grid>
            <Grid item xs={12} lg={3} className={classes.flexPositionCenter}>
              <img
                src={shoeThree}
                className={classes.dimensionsImageFormatShoes}
                alt='Building'
              />
            </Grid>
            <Grid item xs={12} lg={3} className={classes.flexPositionCenter}>
              <img
                src={shoeTwo}
                className={classes.dimensionsImageFormatShoes}
                alt='Building'
              />
            </Grid>
            <Grid item xs={12} lg={3} className={classes.flexPositionCenter}>
              <img
                src={shoeFore}
                className={classes.dimensionsImageFormatShoes}
                alt='Building'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShoesView;

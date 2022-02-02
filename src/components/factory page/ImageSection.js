import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images
import imgBuildingOne from '../../assets/img/Assembly-min.png';
import imgBuildingTwo from '../../assets/img/Manufacturing-min.png';
import imgBuildingThree from '../../assets/img/Industrial-min.png';

const useStyles = makeStyles((theme) => ({
  boxFlexDirectionColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      marginLeft: '32px',
      width: '365px',
    },
    [theme.breakpoints.down('md')]: {
      '& img': {
        marginLeft: '21px',
        width: '305px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& img': {
        marginLeft: '18px',
        width: '280px',
      },
    },
  },
  boxFlexDirectionColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

function ImageSection() {
  const classes = useStyles();
  return (
    <Box sx={{ mt: '82px' }}>
      <Grid container spacing={2}>
        <Grid sx={{ px: 5 }} item xs={12} lg={4}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img src={imgBuildingOne} alt='Line' />
            <Typography sx={{ my: 4 }} variant='h5' component='div'>
              Assembly  0
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 5 }} item xs={12} lg={4}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img src={imgBuildingTwo} alt='Line' />
            <Typography sx={{ my: 4 }} variant='h5' component='div'>
              Manufacturing 0​
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 5 }} item xs={12} lg={4}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img src={imgBuildingThree} alt='Line' />
            <Typography sx={{ my: 4 }} variant='h5' component='div'>
              Industrial 0
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageSection;

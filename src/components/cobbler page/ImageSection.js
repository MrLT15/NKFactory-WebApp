import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images
import imgMachineOne from '../../assets/img/carlapprentice.png';
import imgMachineTwo from '../../assets/img/CarlJourneyman.png';
import imgMachineThree from '../../assets/img/CarlMaster.png';

const useStyles = makeStyles((theme) => ({
  boxFlexDirectionColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
        <Grid sx={{ px: 2 }} item xs={12} lg={4}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={imgMachineOne}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Apprentice 0​
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} lg={4}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={imgMachineTwo}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Journeyman 0​
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} lg={4}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={imgMachineThree}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Master 0​
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageSection;

import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images
import MoldingMachineOne from '../../assets/img/RubberBasic.png';
import MoldingMachineTwo from '../../assets/img/RubberApprentice.png';
import MoldingMachineThree from '../../assets/img/RubberModern.png';
import MoldingMachineFore from '../../assets/img/Rubbertajourneyman.png';
import MoldingMachineFive from '../../assets/img/RubberAdvanced.png';
import MoldingMachineSix from '../../assets/img/RubberMaster.png';

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
        <Grid sx={{ px: 2 }} item xs={12} lg={2}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={MoldingMachineOne}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Basic: 0
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} lg={2}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={MoldingMachineTwo}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Apprentice: 0​
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} lg={2}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={MoldingMachineThree}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Modern​: 0​
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} lg={2}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={MoldingMachineFore}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Journeyman: 0​
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} lg={2}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={MoldingMachineFive}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Advance: 0​
            </Typography>
          </Box>
        </Grid>
        <Grid sx={{ px: 2 }} item xs={12} lg={2}>
          <Box className={classes.boxFlexDirectionColumnCenter}>
            <img
              src={MoldingMachineSix}
              style={{
                marginLeft: '32px',
              }}
              width='156px'
              alt='Line'
            />
            <Typography sx={{ my: 4 }} variant='h6' component='div'>
              Master: 0​
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ImageSection;

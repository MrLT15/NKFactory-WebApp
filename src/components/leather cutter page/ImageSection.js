import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images
import MachineOne from '../../assets/img/LeatherBasic.png';
import MachineTwo from '../../assets/img/LexApprentice.png';
import MachineThree from '../../assets/img/LeatherModern.png';
import MachineFore from '../../assets/img/LexJourneyman.png';
import MachineFive from '../../assets/img/LeatherAdvanced.png';
import MachineSix from '../../assets/img/LexMaster.png';

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
              src={MachineOne}
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
              src={MachineTwo}
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
              src={MachineThree}
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
              src={MachineFore}
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
              src={MachineFive}
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
              src={MachineSix}
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

import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images
import TextileMachineOne from '../../assets/img/TextileBasic.png';
import TextileMachineTwo from '../../assets/img/ExilApprentice.png';
import TextileMachineThree from '../../assets/img/TextileModern.png';
import TextileMachineFore from '../../assets/img/ExilJourneyman.png';
import TextileMachineFive from '../../assets/img/TextileAdvanced.png';
import TextileMachineSix from '../../assets/img/ExilMaster.png';

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
              src={TextileMachineOne}
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
              src={TextileMachineTwo}
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
              src={TextileMachineThree}
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
              src={TextileMachineFore}
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
              src={TextileMachineFive}
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
              src={TextileMachineSix}
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

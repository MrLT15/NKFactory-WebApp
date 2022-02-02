import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  boxPositionCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  boxFlexDirectionColumn: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      '& div': {
        fontSize: '16px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& div': {
        fontSize: '14px',
      },
    },
  },
}));

function CardsSection() {
  const classes = useStyles();
  return (
    <Box sx={{ mt: '82px' }}>
      <Grid container spacing={2}>
        <Grid
          style={{ paddingLeft: '256px', paddingRight: '256px' }}
          item
          xs={12}
        >
          <Card style={{ minHeight: '144px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18, textAlign: 'center' }}
                color='text.secondary'
                variant='p'
                component='div'
              >
                Buid NiftyKicksss NFT​
              </Typography>
              <Box sx={{ mt: 2 }} className={classes.boxPositionCenter}>
                <Box
                  sx={{ mx: '24px' }}
                  className={classes.boxFlexDirectionColumn}
                >
                  <Typography
                    sx={{ fontSize: 18 }}
                    color='text.secondary'
                    variant='p'
                    component='div'
                  >
                    NKFE
                  </Typography>
                  <Typography
                    color='text.secondary'
                    variant='h5'
                    component='div'
                  >
                    0000
                  </Typography>
                </Box>
                <Box
                  sx={{ mx: '24px' }}
                  className={classes.boxFlexDirectionColumn}
                >
                  <Typography
                    sx={{ fontSize: 18 }}
                    color='text.secondary'
                    variant='p'
                    component='div'
                  >
                    NKFT
                  </Typography>
                  <Typography
                    color='text.secondary'
                    variant='h5'
                    component='div'
                  >
                    0000
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardsSection;

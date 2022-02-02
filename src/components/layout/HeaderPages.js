import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

function HeaderPages() {
  return (
    <Box sx={{ mt: '82px' }}>
      <Grid container spacing={2}>
        <Grid sx={{ px: 5 }} item xs={12} lg={3}>
          <Card style={{ minHeight: '95px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18, textAlign: 'center' }}
                color='text.secondary'
                variant='p'
                component='div'
              >
                NKFE
              </Typography>
              <Typography
                sx={{ textAlign: 'center' }}
                color='text.secondary'
                variant='h5'
                component='div'
              >
                0000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ px: 5 }} item xs={12} lg={3}>
          <Card style={{ minHeight: '95px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18, textAlign: 'center' }}
                color='text.secondary'
                variant='p'
                component='div'
              >
                NKFL
              </Typography>
              <Typography
                sx={{ textAlign: 'center' }}
                color='text.secondary'
                variant='h5'
                component='div'
              >
                0000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ px: 5 }} item xs={12} lg={3}>
          <Card style={{ minHeight: '95px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18, textAlign: 'center' }}
                color='text.secondary'
                variant='p'
                component='div'
              >
                NKFT
              </Typography>
              <Typography
                sx={{ textAlign: 'center' }}
                color='text.secondary'
                variant='h5'
                component='div'
              >
                0000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ px: 5 }} item xs={12} lg={3}>
          <Card style={{ minHeight: '95px' }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18, textAlign: 'center' }}
                color='text.secondary'
                variant='p'
                component='div'
              >
                NKFR
              </Typography>
              <Typography
                sx={{ textAlign: 'center' }}
                color='text.secondary'
                variant='h5'
                component='div'
              >
                0000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HeaderPages;

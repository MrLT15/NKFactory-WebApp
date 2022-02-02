import React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Components
import HeaderPages from '../components/layout/HeaderPages';
import ImageSection from '../components/cobbler page/ImageSection';
import CardsSection from '../components/cobbler page/CardsSection';
import ButtonsSection from '../components/cobbler page/ButtonsSection';

const useStyles = makeStyles((theme) => ({
  boxPositionCenter: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      '& div': {
        fontSize: '42px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& div': {
        fontSize: '28px',
      },
    },
  },
}));

function Cobbler() {
  const classes = useStyles();
  return (
    <Box sx={{ mx: '64px', py: '64px' }}>
      <Box sx={{ my: 5 }} className={classes.boxPositionCenter}>
        <Typography style={{ fontWeight: '700' }} variant='h3' component='div'>
          Cobbler
        </Typography>
      </Box>
      <HeaderPages />
      <ImageSection />
      <CardsSection />
      <ButtonsSection />
    </Box>
  );
}

export default Cobbler;

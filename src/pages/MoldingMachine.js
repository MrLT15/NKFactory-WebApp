import React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Components
import HeaderPages from '../components/layout/HeaderPages';
import ImageSection from '../components/molding machine page/ImageSection';
import CardsSection from '../components/molding machine page/CardsSection';
import ButtonsSection from '../components/molding machine page/ButtonsSection';

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

function MoldingMachine() {
  const classes = useStyles();
  return (
    <Box sx={{ mx: '64px', py: '64px' }}>
      <Box sx={{ my: 5 }} className={classes.boxPositionCenter}>
        <Typography style={{ fontWeight: '700' }} variant='h3' component='div'>
          Molding Machine
        </Typography>
      </Box>
      <HeaderPages />
      <ImageSection />
      <CardsSection />
      <ButtonsSection />
    </Box>
  );
}

export default MoldingMachine;

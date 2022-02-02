import React from 'react';
import { Box, Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  boxPositionEnd: {
    display: 'flex',
    justifyContent: 'end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));

function ButtonSection() {
  const classes = useStyles();
  return (
    <Box sx={{ mt: '82px' }}>
      <Box sx={{ px: 5 }} className={classes.boxPositionEnd}>
        <Button
          sx={{ mx: 5, px: 5, py: 2 }}
          variant='contained'
          color='primary'
        >
          <Link color='text.primary' href='/' underline='none'>
            Welcome Page
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default ButtonSection;

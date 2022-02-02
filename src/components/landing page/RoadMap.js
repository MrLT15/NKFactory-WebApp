import React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  boxAbout: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '128px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '64px',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '32px',
    },
  },
  fontTitleAbout: {
    fontWeight: '700 !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
  },
  boxFlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  boxCircleEnd: {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundColor: 'red',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '26px',
    },
  },
}));

function RoadMap() {
  const classes = useStyles();
  return (
    <Box id='roadMap' sx={{ py: '64px', px: '128px' }}>
      <Box className={classes.boxAbout}>
        <Typography
          className={classes.fontTitleAbout}
          variant='h2'
          component='div'
        >
          Road Map
        </Typography>
      </Box>
      <Box className='roadMap'>
        <div className='timeline'>
          <div className='container left'>
            <div className='phase'>Phase 1 Q4/21</div>
            <div className='content'>
              <p>Game Script: Completed​</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>Draw Characters, Machinery, Buildings: Completed.​</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <p>Promo Drops: Completed</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>Website Launch: Completed​</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <p>Smart Contracts: 12/30/21.​</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>Whitelisting New Collection on AH: 02/07/22.</p>
            </div>
          </div>
          <div className='container left'>
            <div className='phase'>Phase 2 Q1/22</div>
            <div className='content'>
              <p>
                1st Main Drop (Factory Buildings and Machines: Scheduled on
                03/04/22 starting at 1800 UCT.​​
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <p>
                UI Close Beta Testing: Soft Scheduled for February 18th, 2022
                starting at 1800 UTC.
              </p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>
                2nd Main Drop (Laborers Packs): Soft Scheduled on
                03/11/22. at 1800 UTC
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <p>UI Open Beta Testing: Soft Scheduled for 4th March 2022.</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>Tokens Listed on Alcor: March 4th, 2022</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <p>Game Launches: Scheduled for March 4th 2022.</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>
                Production of Raw Materials & Energy Starts: scheduled for
                March 4th, 2022
              </p>
            </div>
          </div>
          <div className='container left'>
            <div className='phase'>Phase 3 Q2</div>
            <div className='content'>
              <p>Employee Of The Month Event​​</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>Employee of the Month Event: TBD.​​​</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <p>Monthly Sneaker Drop Event: Q3-Q4/22.​​​​</p>
            </div>
          </div>
          <div className='container left'>
            <div className='phase'>Phase 4 Q3-Q4/22</div>
            <div className='content'>
              <p>Employee Of The Month Event​​</p>
            </div>
          </div>
          <div className='container right'>
            <div className='content'>
              <p>Sporting Events: TBD.</p>
            </div>
          </div>
          <div className='container left'>
            <div className='content'>
              <p>Cross Gaming Implementation: TBD.</p>
            </div>
          </div>
        </div>
        <Box className={classes.boxFlexCenter}>
          <Box className={classes.boxCircleEnd}></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RoadMap;

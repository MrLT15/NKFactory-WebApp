import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Images
// Image Building
import imgBuildingHeader from '../../assets/img/Industrial-min.png';

// Images Clothes
import imgRubberAdvanced from '../../assets/img/RubberAdvanced.png';
import imgRubberApprentice from '../../assets/img/RubberApprentice.png';

// Image Lines
import imgLineRight from '../../assets/img/line-right.svg';
import imgMultiplLines from '../../assets/img/multipl-lines.svg';

const useStyles = makeStyles((theme) => ({
  root: {},
  boxAbout: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '128px',
  },
  fontTitleAbout: {
    fontWeight: '700 !important',
  },
  imageLineRotate: {
    marginLeft: '32px',
    transform: 'rotate(180deg)',
    [theme.breakpoints.between('md', 'lg')]: {
      transform: 'rotate(270deg)',
      marginLeft: '0',
      marginTop: '32px',
    },
    [theme.breakpoints.between('xs', 'md')]: {
      transform: 'rotate(270deg)',
      marginLeft: '0',
      marginTop: '32px',
    },
  },
  boxFlexDirectionColumn: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('md', 'lg')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      '& img': {
        margin: '0 42px',
      },
    },
    [theme.breakpoints.between('xs', 'md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      '& img': {
        margin: '0 12px',
      },
    },
  },
  textBorder: {
    padding: '16px',
    border: `3px solid #fff`,
    height: '30%',
    marginLeft: '15px',
    alignSelf: 'end',
    [theme.breakpoints.between('md', 'lg')]: {
      height: '50%',
    },
    [theme.breakpoints.between('xs', 'md')]: {
      height: '50%',
    },
  },
  flexAlignCenterJustifyCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .line': {
      marginLeft: '32px',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      flexDirection: 'column',
      padding: '10% 0',
      '& .line': {
        transform: 'rotate(90deg)',
        marginTop: '48px',
        marginBottom: '32px',
      },
      '& .multipleLines': {
        transform: 'rotate(90deg)',
      },
    },
    [theme.breakpoints.between('xs', 'md')]: {
      flexDirection: 'column',
      padding: '10% 0',
      '& .line': {
        transform: 'rotate(90deg)',
        marginTop: '48px',
        marginBottom: '32px',
      },
      '& .multipleLines': {
        transform: 'rotate(90deg)',
      },
    },
  },
  flexAlignSpaceBetween: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.between('md', 'lg')]: {
      flexFlow: 'row',
    },
    [theme.breakpoints.between('xs', 'md')]: {
      flexFlow: 'row',
      '& span': {
        margin: '0 15px',
      },
    },
  },
  flexAlignCenter: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.between('md', 'lg')]: {
      flexDirection: 'column',
      '& img': {
        transform: 'rotate(90deg)',
        margin: '60px 0',
      },
    },
    [theme.breakpoints.between('xs', 'md')]: {
      flexDirection: 'column',
      '& img': {
        transform: 'rotate(90deg)',
        margin: '60px 0',
      },
    },
  },
  flexJustifyCenter: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.between('md', 'lg')]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& .multipleLiens': {
        transform: 'rotate(90deg)',
      },
      '& .specialLine': {
        marginTop: '60px',
      },
    },
    [theme.breakpoints.between('xs', 'md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      '& .multipleLiens': {
        transform: 'rotate(90deg)',
      },
      '& .specialLine': {
        marginTop: '60px',
      },
    },
  },
  lastContentMap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '5% 0',
    [theme.breakpoints.between('md', 'lg')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.between('xs', 'md')]: {
      flexDirection: 'row',
      '& span': {
        margin: '0 15px',
      },
    },
  },
}));

function Functionality() {
  const classes = useStyles();
  return (
    <Box sx={{ py: '64px', px: '128px' }}>
      <Box className={classes.boxAbout}>
        <Typography
          className={classes.fontTitleAbout}
          variant='h2'
          component='div'
        >
          Functionality
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid
                items
                xs={12}
                lg={3}
                className={classes.flexAlignCenterJustifyCenter}
              >
                <img
                  src={imgBuildingHeader}
                  alt='Building'
                  width='285px'
                  height='190px'
                />
                <img
                  src={imgLineRight}
                  className='line'
                  width='128px'
                  alt='Line'
                />
              </Grid>
              <Grid
                items
                xs={12}
                lg={3}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant='p'
                  className={classes.flexAlignCenterJustifyCenter}
                >
                  Claim NKFE
                </Typography>
              </Grid>
              <Grid
                items
                xs={12}
                lg={3}
                className={classes.flexAlignCenterJustifyCenter}
              >
                <img
                  src={imgLineRight}
                  className={classes.imageLineRotate}
                  width='128px'
                  alt='Line'
                />
                <img
                  src={imgMultiplLines}
                  className='multipleLines'
                  width='128'
                  alt='Line'
                />
              </Grid>
              <Grid
                items
                xs={12}
                lg={3}
                className={classes.flexAlignSpaceBetween}
              >
                <Typography variant='p'>Sell on Alcor</Typography>
                <Typography variant='p'>
                  Use NKFE to Make Machines or Sneaker NFT’s if you have a
                  Cobbler
                </Typography>
                <Typography variant='p'>Make a new building</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid items xs={12} sx={{ my: '64px' }}>
            <Grid container spacing={2}>
              <Grid
                items
                xs={12}
                lg={3}
                className={classes.boxFlexDirectionColumn}
              >
                <img
                  src={imgRubberAdvanced}
                  alt='Building'
                  width='112px'
                  height='171px'
                  style={{
                    marginTop: '32px',
                  }}
                />
                <Box style={{ display: 'flex' }}>
                  <img
                    src={imgRubberApprentice}
                    alt='Building'
                    width='112px'
                    height='171px'
                    style={{
                      marginTop: '32px',
                    }}
                  />
                  <Typography variant='p' className={classes.textBorder}>
                    + Boost From Laborer
                  </Typography>
                </Box>
              </Grid>
              <Grid items xs={12} lg={3} className={classes.flexAlignCenter}>
                <img src={imgLineRight} width='128px' alt='Line' />
                <Typography variant='p' style={{ marginLeft: '15px' }}>
                  Claim NKFR
                </Typography>
              </Grid>
              <Grid items xs={12} lg={3} className={classes.flexJustifyCenter}>
                <img
                  src={imgLineRight}
                  className={`specialLine ${classes.imageLineRotate}`}
                  width='128px'
                  alt='Line'
                />
                <img
                  src={imgMultiplLines}
                  className='multipleLiens'
                  width='128px'
                  alt='Line'
                />
              </Grid>
              <Grid items xs={12} lg={3} className={classes.lastContentMap}>
                <Typography variant='p'>Sell on Alcor</Typography>
                <Typography variant='p'>Make Machine</Typography>
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='p'>Use NKFE to Make</Typography>
                  <Typography variant='p'>Sneaker NFT’s if you </Typography>
                  <Typography variant='p'>have a Cobbler</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Functionality;

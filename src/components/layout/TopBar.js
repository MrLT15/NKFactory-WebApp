import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Link,
  Avatar,
  useMediaQuery,
  IconButton,
  List,
  ListItem,
  Drawer,
} from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';

import DehazeIcon from '@mui/icons-material/Dehaze';

import ModalLogin from './ModalLogin';

// Logo Website
import Logo from '../../assets/img/Logo.png';

const styleNavbar = {
  background: 'transparent',
  boxShadow: 'none',
};

const styleNavbarScrolling = {
  background: '#010101',
};

const useStyles = makeStyles((theme) => ({
  root: {},
  linkStyle: {
    fontSize: '18px',
    fontWeight: '400',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  listDrawer: {
    background: theme.palette.primary.dark,
  },
}));

function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [navbar, setNavbar] = useState(false);
  const [responsiveNavbar, setResponsiveNavbar] = useState({
    top: false,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setResponsiveNavbar({ ...responsiveNavbar, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.listDrawer}>
        <ListItem>
          <Link
            href='/factory_building'
            className={classes.linkStyle}
            underline='none'
            color='text.primary'
            sx={{ mx: 4 }}
          >
            Factory
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='/cobbler'
            className={classes.linkStyle}
            underline='none'
            color='text.primary'
            sx={{ mx: 4 }}
          >
            Cobbler
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='/sneaker_rack'
            className={classes.linkStyle}
            underline='none'
            color='text.primary'
            sx={{ mx: 4 }}
          >
            Sneaker Vault
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='#roadMap'
            className={classes.linkStyle}
            underline='none'
            color='text.primary'
            sx={{ mx: 4 }}
          >
            Road Map
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='#contactUs'
            className={classes.linkStyle}
            underline='none'
            color='text.primary'
            sx={{ mx: 4 }}
          >
            Contact Us
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='https://niftykicksfactory.gitbook.io/nifty-kicks-factory/'
            className={classes.linkStyle}
            underline='none'
            color='text.primary'
            sx={{ mx: 4 }}
          >
            Whitepaper
          </Link>
        </ListItem>
        <ListItem>
          <Button sx={{ mx: 4 }} onClick={handleOpen} variant='contained'>
            Login
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      return setNavbar(true);
    } else {
      return setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <AppBar
        sx={{
          px: '22px',
          py: `${navbar ? '' : '12px'}`,
        }}
        style={navbar ? styleNavbarScrolling : styleNavbar}
        position={navbar ? 'fixed' : 'static'}
      >
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Avatar alt='Logo' src={Logo} sx={{ width: 96, height: 96 }} />
          </Typography>
          <Box
            sx={{
              ml: 'auto',
            }}
          >
            {isMatch ? (
              <>
                {['top'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      color='primary'
                      size='large'
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <DehazeIcon style={{ fontSize: '42px' }} />
                    </IconButton>
                    <Drawer
                      anchor={anchor}
                      open={responsiveNavbar[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </>
            ) : (
              <>
                <Link
                  href='/factory_building'
                  className={classes.linkStyle}
                  underline='none'
                  color='text.primary'
                  sx={{ mx: 4 }}
                >
                  Factory
                </Link>
                <Link
                  href='/cobbler'
                  className={classes.linkStyle}
                  underline='none'
                  color='text.primary'
                  sx={{ mx: 4 }}
                >
                  Cobbler
                </Link>
                <Link
                  href='/sneaker_rack'
                  className={classes.linkStyle}
                  underline='none'
                  color='text.primary'
                  sx={{ mx: 4 }}
                >
                  Sneaker Vault
                </Link>
                <Link
                  href='#roadMap'
                  className={classes.linkStyle}
                  underline='none'
                  color='text.primary'
                  sx={{ mx: 4 }}
                >
                  Road Map
                </Link>
                <Link
                  href='#contactUs'
                  className={classes.linkStyle}
                  underline='none'
                  color='text.primary'
                  sx={{ mx: 4 }}
                >
                  Contact Us
                </Link>
                <Link
                  href='https://niftykicksfactory.gitbook.io/nifty-kicks-factory/'
                  className={classes.linkStyle}
                  underline='none'
                  color='text.primary'
                  sx={{ mx: 4 }}
                >
                  Whitepaper
                </Link>
                <Button sx={{ mx: 4 }} onClick={handleOpen} variant='contained'>
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <ModalLogin open={open} handleClose={handleClose} />
    </>
  );
}

export default TopBar;

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import poppinsText from '../../assets/fonts/Poppins-Regular.ttf';
import PropTypes from 'prop-types';

export default function Theme(props) {
  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
        default: '#f99e1a',
      },
      primary: {
        main: '#f99e1a',
        dark: '#843a06',
        light: '#FFDBC7',
        contrastText: '#fff',
      },
      secondary: {
        main: '#fff',
        contrastText: '#EB3B39',
      },
      error: {
        main: '#ff3333',
        contrastText: '#fff',
      },
      success: {
        main: '#6cc070',
        contrastText: '#fff',
      },
      warning: {
        main: '#F4D54C',
        contrastText: '#fff',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#010101',
      },
    },
    // typography: {
    //   fontFamily: `'Poppins', sans-serif`,
    // },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
                @font-face {
                  font-family: 'Poppins', sans-serif;
                  src: url(${poppinsText}) format('truetype');
              `,
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            minWidth: '142px',
            fontSize: '18px',
            fontWeight: '600',
            textTransform: 'none',
          },
        },
      },
      //   MuiLink: {
      //     styleOverrides: {
      //       root: {
      //         fontWeight: '700',
      //         fontsize: '16px',
      //         textDecorationThickness: '1.5px',
      //         textDecorationColor: '#262B36',
      //         color: '#262B36',
      //         '&:hover': {
      //           textDecorationColor: '#0065B3',
      //           color: '#0065B3',
      //         },
      //       },
      //     },
      //   },
      //   MuiCard: {
      //     styleOverrides: {
      //       root: {
      //         borderRadius: '12px',
      //       },
      //     },
      //   },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

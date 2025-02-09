import { createTheme } from '@mui/material/styles';

import { Direction } from '@mui/material';

const lightTheme = (dir: Direction = "ltr") => createTheme({
  direction: dir,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,  
      md: 768,
      lg: 1024,
      xl: 1280, 
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2a6f97', 
    },
    secondary: {
      main: '#61a5c2',
    },
    background: {
      default: '#f6f5f2',
      paper: '#ede9d5',
    },
    text: {
      primary: '#133a51', 
      secondary: '#555555', 
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

export default lightTheme;
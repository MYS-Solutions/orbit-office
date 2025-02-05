import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  direction: 'ltr',
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
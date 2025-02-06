'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import lightTheme from './theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MUIThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
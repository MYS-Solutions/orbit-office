'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline, Direction } from '@mui/material';
import lightTheme from './theme';

export default function ThemeProvider({ children, dir = "ltr" }: { children: React.ReactNode, dir: Direction }) {
  return (
    <MUIThemeProvider theme={lightTheme(dir)}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
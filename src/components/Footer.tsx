"use client";
import { Typography, Box, useTheme } from '@mui/material';

export function Attribution({description, owner, link}: {description: string, owner: string, link: string}) {
  const theme = useTheme();

  return (
    <Typography variant="body2" color="inherit">
      {description} by <a href={link} target="_blank" rel="noopener noreferrer" style={{color: theme.palette.background.paper}}>{owner}</a>
    </Typography>
  );
}

export function Footer({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <Box dir='ltr' component={"footer"} sx={{padding: 2, backgroundColor: theme.palette.text.primary, color: theme.palette.background.default}}>
      {children}
    </Box>
  );
}
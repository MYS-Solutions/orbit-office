import { Typography, Box } from '@mui/material';

export function Attribution({description, owner, link}: {description: string, owner: string, link: string}) {
  return (
    <Typography variant="body2" color="inherit">
      {description} by <Typography component='a' href={link} target='_blank' sx={{color: "background.default"}}>{owner}</Typography>
    </Typography>
  );
}

export function Footer({ children }: { children: React.ReactNode }) {
  return (
    <Box dir='ltr' component={"footer"} sx={{padding: 2, backgroundColor: "text.primary", color: "background.default"}}>
      {children}
    </Box>
  );
}
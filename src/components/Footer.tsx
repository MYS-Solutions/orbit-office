import { Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', py: 2, backgroundColor: 'black', color: 'white' }}>
      <Typography variant="body2">
        Hero Background image by <a href="https://www.freepik.com/free-vector/realistic-travel-background-with-elements_20852675.htm" 
        target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
          Freepik
        </a>
      </Typography>
    </Box>
  );
}
'use client';

import { Gradient } from '@mui/icons-material';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundImage: 'url(/freepik-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      }}
    >
      <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to bottom, transparent 99%, ${theme.palette.background.default})`,
        zIndex: 1,
        boxShadow: null,
      }}
      />
      <Box sx={{ position: 'relative', px: 2, zIndex: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          {t('hero.title')}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom align='center'>
          {t('hero.subtitle')}
        </Typography>
      </Box>
    </Box>
  );
}
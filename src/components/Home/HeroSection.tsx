import { Box, Typography, Button } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <Box id="hero" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h2">{t('hero.welcome')}</Typography>
      <Typography variant="h6">{t('hero.tagline')}</Typography>
      <Button href="#about" variant="contained" color="primary">
        {t('hero.cta')}
      </Button>
    </Box>
  );
}
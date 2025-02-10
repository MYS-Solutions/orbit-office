import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations();

  return (
    <Box component="section" id="about">
      <Typography variant="h3">{t('about.title')}</Typography>
      <Typography>{t('about.description')}</Typography>
    </Box>
  );
}
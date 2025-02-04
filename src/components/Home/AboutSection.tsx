import { Box, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations();

  return (
    <Box id="about" sx={{ py: 8 }}>
      <Typography variant="h3">{t('about.title')}</Typography>
      <Typography>{t('about.description')}</Typography>
    </Box>
  );
}
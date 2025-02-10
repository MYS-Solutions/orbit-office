import { Box, Typography, Button } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations();

  return (
    <Box component="section" id="contact">
      <Typography variant="h3">{t('contact.title')}</Typography>
      <Typography>{t('contact.description')}</Typography>
    </Box>
  );
}
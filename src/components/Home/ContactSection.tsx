import { Box, Typography, Button } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations();

  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Typography variant="h3">{t('contact.title')}</Typography>
      <Typography>{t('contact.description')}</Typography>
    </Box>
  );
}
import { Box, Container, Typography } from '@mui/material';
import { Flight } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import ServiceCard from '@/components/Cards/ServiceCard';

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <Box component="section" id="services">
      <Typography variant="h3">{t('title')}</Typography>
      <Typography>{t('description')}</Typography>
      <Container component="ul" sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', listStyle: 'none', p: 0, mb: 0, ">li": {m: 0, listStyle: 'none', padding: 0}}}>
        <ServiceCard icon={<Flight/>} name={t("flights.title")} brief={t("flights.description")}/>
        <ServiceCard icon={<Flight/>} name={t("work.title")} brief={t("work.description")}/>
        <ServiceCard icon={<Flight/>} name={t("tours.title")} brief={t("tours.description")}/>
      </Container>
    </Box>
  );
}
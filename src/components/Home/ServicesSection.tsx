import { Box, Container, Typography } from '@mui/material';
import { Flight } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import ServiceCard from '@/components/Cards/ServiceCard';

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <Box component="section" id="services" sx={{ textAlign: "center", py: 4 }}>
      {/* Section Title */}
      <Typography variant="h3" sx={{ mb: 2 }}>
        {t('title')}
      </Typography>
      <Typography sx={{ mb: 4 }}>
        {t('description')}
      </Typography>

      <Container
        component="ul"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(250px, 1fr))' }, // Makes sure items are centered
          justifyContent: 'center', // Centers the grid itself
          alignItems: 'center', // Aligns items vertically
          gap: 3, // Adds spacing between cards
          listStyle: 'none',
          p: 0,
          m: '0 auto', // Ensures the container itself is centered
          maxWidth: '1000px', // Prevents excessive stretching
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ServiceCard icon={<Flight />} name={t("flights.title")} brief={t("flights.description")} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ServiceCard icon={<Flight />} name={t("work.title")} brief={t("work.description")} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ServiceCard icon={<Flight />} name={t("tours.title")} brief={t("tours.description")} />
        </Box>
      </Container>
      
    </Box>
    
  );
}

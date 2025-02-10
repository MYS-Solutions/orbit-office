import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import ContactSection from '@/components/Home/ContactSection';
import ServicesSection from '@/components/Home/ServicesSection';
import { Container } from '@mui/material';

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
      <HeroSection/>
      <Container sx={{ px: 2, ">section": { my: 4 } }}>
        <AboutSection/>
        <ServicesSection/>
        <ContactSection/>
      </Container>
    </>
  );
}
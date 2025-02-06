import { Container } from '@mui/material';
import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import ContactSection from '@/components/Home/ContactSection';

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <Container maxWidth="xl" disableGutters>
      <HeroSection/>
      <AboutSection/>
      <ContactSection/>
    </Container>
  );
}
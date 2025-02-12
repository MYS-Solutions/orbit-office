import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/Home/AboutSection';
import ContactSection from '@/components/Home/ContactSection';
import ServicesSection from '@/components/Home/ServicesSection';
import { Container } from '@mui/material';
import Navbar from '@/components/Navbar';
import { Footer, Attribution } from '@/components/Footer';

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
      <Navbar sections={["about", "services", "offers", "contact"]}/>
      <HeroSection/>
      <Container sx={{ px: 2, ">section": { my: 4 } }}>
        <AboutSection/>
        <ServicesSection/>
        <ContactSection/>
      </Container>
      <Footer>
        <Attribution description="Top of the page background" owner="Freepik" link="https://www.freepik.com/free-vector/realistic-travel-background-with-elements_20852675.htm" />
      </Footer>
    </>
  );
}
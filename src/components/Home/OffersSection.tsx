import { Box, Container, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import OfferCard from '@/components/Cards/OfferCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export default function OffersSection() {
  const t = useTranslations("offers");

  return (
    <Box component="section" id="offers">
      <Typography variant="h3">{t('title')}</Typography>
      <Typography>{t('description')}</Typography>
      <Container component="ul" sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', listStyle: 'none', p: 0, mb: 0, ">li": {m: 0, listStyle: 'none', padding: 0}}}>
        <OfferCard icon={<LocalOfferIcon/>} name='Hello' description='some description'/>
        <OfferCard icon={<LocalOfferIcon/>} name='Hello' description='some description'/>
        <OfferCard icon={<LocalOfferIcon/>} name='Hello' description='some description'/>
        <OfferCard icon={<LocalOfferIcon/>} name='Hello' description='some description'/>

      </Container>
    </Box>
  );
}
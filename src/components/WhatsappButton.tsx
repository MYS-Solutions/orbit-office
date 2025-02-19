"use client";
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography } from '@mui/material';

const WhatsAppButton = ({ message, phone = "96171951333" }: {message: string, phone?: string}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    window.open(url, '_blank');
  };

  return (
    <IconButton sx={{color: "background.default"}} onClick={handleClick}>
        <WhatsAppIcon/>
    </IconButton>
  );
};

export default WhatsAppButton;
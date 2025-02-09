"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { useTranslations } from 'next-intl';
import { Collapse } from '@mui/material';

function Navbar({ sections }: { sections: string[] }) {
  const t = useTranslations();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <AppBar position="fixed" component="nav" sx={{maxWidth: '100vw', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row'}, p: {xs:0, sm:1}}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <IconButton
            size="large"
            aria-label="Navigation Menu Button"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            sx = {{ 
              display: { xs: 'flex', sm: 'none' },
              transition: 'transform 0.3s ease-in-out',
              transform: showMobileMenu ? 'rotate(90deg)' : 'rotate(0deg)',
          }}
          >
            { showMobileMenu? <CloseIcon />: <MenuIcon /> }
          </IconButton>
          
          <AdbIcon sx={{ ml: 2, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {t('brand')}
          </Typography>
          </Box>
          <Box component="ul" area-label="Page Navigation" sx={{ display: {xs: 'none', sm: 'flex'}, alignItems: 'center', justifyContent: 'flex-start', m: 0, p: 0}}> 
            {sections.map((section) => (
              <Button
                component="a"
                key={section}
                sx={{ color: 'white' }}
              >
                {section}
              </Button>
            ))}
          </Box>
          <Collapse area-label="Page Navigation" in={showMobileMenu} timeout="auto" sx={{display: {sm: 'none', xs: 'flex-box'}, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 0, m: 0}}>
          {sections.map((section) => (
              <Button
                component="a"
                key={section}
                sx={{ color: 'white',  width: '100%' }}
              >
                {section}
              </Button>
            ))}
          </Collapse>
    </AppBar>
  );
}
export default Navbar;

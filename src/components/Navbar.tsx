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
import LanguageSwitcher from './LanguageSwitcher';

function Navbar({ sections }: { sections: string[] }) {
  const t = useTranslations();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <AppBar position="fixed" component="nav" sx={{maxWidth: '100vw', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row'}, p: {xs:0, sm:1}}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: {xs: 0.5, sm: 2} }}>
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
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon/>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                ":hover": {textDecoration: 'underline'}
              }}
            >
              {t('brand')}
            </Typography>
          </Box>
            <LanguageSwitcher />
          </Box>
          <Box component="ul" area-label="Page Navigation" sx={{ display: {xs: 'none', sm: 'flex'}, alignItems: 'center', justifyContent: 'flex-start', m: 0, p: 0}}> 
            {sections.map((section) => (
              <Button
                component="a"
                href={`#${section}`}
                key={section}
                sx={{ color: 'white',
                  flexShrink: 1,
                  textWrap: 'nowrap',
                  "&::after": {
                      content: '""',
                      display: "block",
                      height: 0.1, 
                      width: "0%",
                      backgroundColor: "white",
                      borderRadius: 0.4,
                      transition: "width 0.3s ease-in-out",
                      position: "absolute",
                      bottom: 5,
                      left: "50%",
                      transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%", 
                }, }}
              >
                {t(`navbar.${section}`)}
              </Button>
            ))}
          </Box>
          <Collapse area-label="Page Navigation" in={showMobileMenu} timeout="auto" sx={{display: {sm: 'none', xs: 'flex-box'}, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 0, m: 0}}>
          {sections.map((section) => (
              <Button
                component="a"
                href={`#${section}`}
                key={section}
                sx={{ color: 'white',  width: '100%' }}
              >
                {t(`navbar.${section}`)}
              </Button>
            ))}
          </Collapse>
    </AppBar>
  );
}
export default Navbar;

"use client";
import * as React from 'react';
import { AppBar, Box, IconButton, Typography, Button, Collapse, useTheme } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Adb as AdbIcon } from '@mui/icons-material';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import WhatsappButton from './WhatsappButton';

type navLink = { page: string, href: string };

function Navbar({ sections = [], links = [] }: { sections?: string[], links?: navLink[] }) {
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
                sx={{ 
                  color: "background.default",
                  flexShrink: 1,
                  textWrap: 'nowrap',
                  "&::after": {
                      content: '""',
                      display: "block",
                      height: 0.1, 
                      width: "0%",
                      backgroundColor: "background.default",
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
          <Box component="ul" area-label="Website Navigation" sx={{ display: {xs: 'none', sm: 'flex'}, alignItems: 'center', justifyContent: 'flex-start', m: 0, p: 0}}> 
            {links.map((link) => (
              <Button
                component="a"
                href={link.href}
                key={link.page}
                sx={{ color: "background.paper", flexShrink: 1, textWrap: 'nowrap', "&::after": {
                      content: '""',
                      display: "block",
                      height: 0.1, 
                      width: "0%",
                      backgroundColor: "background.paper",
                      borderRadius: 0.4,
                      transition: "width 0.3s ease-in-out",
                      position: "absolute",
                      bottom: 5,
                      left: "50%",
                      transform: "translateX(-50%)",
                  },
                  "&:hover::after": {
                    width: "100%", 
                }}}
              >
                {t(`navbar.${link.page}`)}
              </Button>
            ))}
          </Box>
          <WhatsappButton message={t("navbar.message")}/>
          <Collapse area-label="Page Navigation" in={showMobileMenu} timeout="auto" sx={{display: {sm: 'none', xs: 'flex-box'}, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 0, m: 0}}>
          {sections.map((section) => (
              <Button
                component="a"
                href={`#${section}`}
                key={section}
                onClick={() => setShowMobileMenu(false)}
                sx={{ color: 'white',  width: '100%' }}
              >
                {t(`navbar.${section}`)}
              </Button>
            ))}
            {links.map((link) => (
              <Button
                component="a"
                href={link.href}
                key={link.page}
                onClick={() => setShowMobileMenu(false)}
                sx={{ color: "background.paper", width: '100%' }}
              >
                {t(`navbar.${link.page}`)}
              </Button>
            ))}
          </Collapse>
    </AppBar>
  );
}
export default Navbar;

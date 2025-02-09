"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

const locales = [
  { identifier: "en", name: "English", displayName: "EN" },
  { identifier: "ar", name: "العربية", displayName: "ض" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newLocale?: string) => {
    setAnchorEl(null);
    if (newLocale && newLocale !== currentLocale) {
      const newPath = `/${newLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`;
      router.push(newPath);
    }
  };

  return (
    <Box>
      {/* 🌍 Language Selector Button */}
      <IconButton
        onClick={handleClick}
        sx={{
          border: "2px solid white",
          borderRadius: "6px",
          padding: "1px 5px",
          color: "white",
          minWidth: "30px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {locales.find((l) => l.identifier === currentLocale)?.displayName || "EN"}
        </Typography>
      </IconButton>

      {/* 🏆 Language Selection Menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()}>
        {locales.map(({ identifier, name, displayName }) => (
          <MenuItem key={identifier} onClick={() => handleClose(identifier)}>
            <Typography variant="body1" sx={{ fontWeight: "bold", minWidth: "30px" }}>
              {displayName}
            </Typography>
            <Typography variant="body2" sx={{ mx: 1 }}>
              {name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
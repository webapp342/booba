"use client";

import * as React from "react";
import Link from "next/link";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export default function NavigationBar() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: "0 -2px 5px rgba(0,0,0,0.2)",
        backgroundColor: "#f5f5f5", // Modern gri tonu
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        href="/"
        sx={{
          color: value === 0 ? "black" : "#9e9e9e", // Seçili öğe siyah, diğerleri gri
          "&:hover": { backgroundColor: "transparent" }, // Hover kaldırıldı
          transition: "none", // Büyüme animasyonu kaldırıldı
        }}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        component={Link}
        href="/favorites"
        sx={{
          color: value === 1 ? "black" : "#9e9e9e",
          "&:hover": { backgroundColor: "transparent" },
          transition: "none",
        }}
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        component={Link}
        href="/profile"
        sx={{
          color: value === 2 ? "black" : "#9e9e9e",
          "&:hover": { backgroundColor: "transparent" },
          transition: "none",
        }}
      />
    </BottomNavigation>
  );
}

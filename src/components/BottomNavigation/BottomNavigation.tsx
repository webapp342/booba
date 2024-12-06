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
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        href="/"
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        component={Link}
        href="/favorites"
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        component={Link}
        href="/profile"
      />
    </BottomNavigation>
  );
}

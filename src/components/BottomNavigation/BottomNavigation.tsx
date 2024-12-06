"use client";

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
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#f5f5f5", // Modern gray background
        boxShadow: "0 -2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon sx={{ color: value === 0 ? "black" : "#9e9e9e" }} />}
        component={Link}
        href="/"
        sx={{
          color: value === 0 ? "black" : "#9e9e9e", // Selected black, others gray
          "&:hover": { 
            backgroundColor: "transparent", 
            color: "black", // Change label color on hover
            "& .MuiBottomNavigationAction-label": {
              color: "black", // Change label color on hover
            }
          },
          "& .Mui-selected": {
            fontWeight: "bold",
          },
          transition: "none", // Remove grow animation
        }}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon sx={{ color: value === 1 ? "black" : "#9e9e9e" }} />}
        component={Link}
        href="/favorites"
        sx={{
          color: value === 1 ? "black" : "#9e9e9e",
          "&:hover": { 
            backgroundColor: "transparent", 
            color: "black", // Change label color on hover
            "& .MuiBottomNavigationAction-label": {
              color: "black", // Change label color on hover
            }
          },
          "& .Mui-selected": {
            fontWeight: "bold",
          },
          transition: "none",
        }}
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon sx={{ color: value === 2 ? "black" : "#9e9e9e" }} />}
        component={Link}
        href="/profile"
        sx={{
          color: value === 2 ? "black" : "#9e9e9e",
          "&:hover": { 
            backgroundColor: "transparent", 
            color: "black", // Change label color on hover
            "& .MuiBottomNavigationAction-label": {
              color: "black", // Change label color on hover
            }
          },
          "& .Mui-selected": {
            fontWeight: "bold",
            color: "black",
          },
          transition: "none",
        }}
      />
    </BottomNavigation>
  );
}
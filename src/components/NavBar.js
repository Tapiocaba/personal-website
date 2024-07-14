import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    /* 
        {
            title: "Toybox",
            path: "/toybox"
        },
        */
    {
      title: "Journal",
      path: "/journal",
    },
    {
      title: "Resume",
      path: "/resume",
    },
  ];

  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleGithubClick = () => {
    window.open("https://github.com/tapiocaba", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/lisazzlin", "_blank");
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const menuList = (
    <Box
      sx={{
        "&&": {
          color: "#D56E61",
          paddingTop: "10%",
          fontSize: "16px",
          backgroundColor: "#FFEEE2",
          height: "auto",
          maxHeight: "60vh",
          overflow: "auto",
        },
      }}
    >
      <List component="nav">
        {links.map((item, index) => (
          <RouterLink
            to={item.path}
            key={index}
            style={{ textDecoration: "none" }}
            onClick={handleLinkClick}
          >
            <ListItem
              sx={{
                "&&": {
                  justifyContent: isMobile ? "flex-start" : "flex-end",
                  padding: isMobile ? "5px 5px 5px 15px" : "5px",
                },
              }}
            >
              <ListItemText
                primary={item.title}
                sx={{
                  textAlign: isMobile ? "left" : "right",
                  color:
                    location.pathname === item.path ? "#efc7c2" : "#8CB190",
                  "&:hover": {
                    color: "#bfd3c1",
                    cursor: "pointer",
                  },
                }}
              />
            </ListItem>
          </RouterLink>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{
              color: "#D56E61",
              "&:hover": { color: "#bfd3c1", cursor: "pointer" },
            }}
            onClick={handleGithubClick}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#D56E61",
              "&:hover": { color: "#bfd3c1", cursor: "pointer" },
            }}
            onClick={handleLinkedinClick}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </List>
    </Box>
  );

  return isMobile ? (
    <Box>
      <IconButton
        onClick={() => setDrawerOpen(true)}
        style={{ color: "#bfd3c1" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {menuList}
      </Drawer>
    </Box>
  ) : (
    menuList
  );
};

export default NavBar;

"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  "Services",
  "Vehicles",
  "How It Works",
  "About Us",
  "Reviews",
];

export default function Header(props: {
  handleClick?: (link: string) => void;
}) {
  const { handleClick } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box sx={{ borderBottom: "1.2px groove #212121" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar>
            <Container>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h2" fontSize={20} sx={{ mr: 2 }}>
                  Chariot Services
                </Typography>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "end",
                  }}
                >
                  {navLinks.map((link, idx) => (
                    <Typography
                      key={idx}
                      fontWeight={400}
                      ml={3}
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleClick?.(link)}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ px: 1, display: openDrawer ? "block" : "none" }}>
        <List>
          {navLinks.map((link, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => {
                handleClick?.(link);
                setOpenDrawer(false);
              }}
              sx={{ backgroundColor: "whitesmoke", mb: 1 }}
            >
              <ListItemButton>
                <ListItemText primary={link} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenDrawer(false)}
        >
          <Typography p={2} fontSize={20}>
            Chariot Services
          </Typography>
          <Divider />
          <List>
            {navLinks.map((link, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => handleClick?.(link)}
              >
                <ListItemButton>
                  <ListItemText primary={link} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer> */}
    </Box>
  );
}

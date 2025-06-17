import React from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Avatar,
} from "@mui/material";

const drawerWidth = 260;

export default function Sidebar({ menuItems }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "#23272e",
          color: "#fff",
          borderRadius: "36px",
          m: 2,
          boxShadow: "0 8px 32px 0 rgba(35,39,46,0.10)",
          transition: "box-shadow 0.3s, background 0.3s",
        },
      }}
    >
      <Box sx={{ p: 3, pb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Picasso Lab
        </Typography>
        <List>
          {menuItems.map((item, idx) => (
            <ListItem
              button
              key={item.text}
              sx={{
                bgcolor: idx === 0 ? "#a5c8f7" : "transparent",
                color: idx === 0 ? "#23272e" : "#fff",
                borderRadius: 2.5,
                mb: 1,
                boxShadow:
                  idx === 0 ? "0 2px 12px 0 rgba(165,200,247,0.18)" : "none",
                fontWeight: idx === 0 ? 700 : 500,
                transition: "box-shadow 0.3s, background 0.3s, color 0.3s",
                "&:hover": {
                  bgcolor: "#a5c8f7",
                  color: "#23272e",
                  boxShadow: "0 2px 12px 0 rgba(165,200,247,0.18)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ p: 3, pb: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            borderRadius: 4.5,
            display: "flex",
            alignItems: "center",
            bgcolor: "#e6eef7",
            color: "#23272e",
            boxShadow: "0 4px 24px 0 rgba(165,200,247,0.10)",
            transition: "box-shadow 0.3s, background 0.3s",
          }}
        >
          <Avatar
            src="https://randomuser.me/api/portraits/women/50.jpg"
            sx={{
              width: 60,
              height: 60,
              mr: 2,
              borderRadius: 3,
              boxShadow: "0 2px 8px 0 rgba(165,200,247,0.18)",
              transition: "box-shadow 0.3s",
            }}
          />
          <Box>
            <Typography fontWeight={600}>Dr. Elizabeth White</Typography>
            <Typography variant="body2" color="text.secondary">
              Врач-терапевт (ГП)
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Drawer>
  );
}

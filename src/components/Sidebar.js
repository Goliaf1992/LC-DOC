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
  IconButton,
  Divider,
  Badge,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Logo } from "./index";

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
          color: "#ffffff",
          borderRadius: "36px",
          m: 2,
          boxShadow: "0 8px 32px 0 rgba(35,39,46,0.10)",
          transition: "box-shadow 0.3s, background 0.3s",
        },
      }}
    >
      <Box sx={{ p: 3, pb: 1}}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 2 }}>
          <Logo width={40} height={39} sx={{ mr: 4 }} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, lineHeight: 1.2, mb: 0.5 }}
            >
              ПИКАССО
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, color: "#a5c8f7", lineHeight: 1.2 }}
            >
              ЛИЧНЫЙ КАБИНЕТ
            </Typography>
          </Box>
        </Box>
        <List>
          {menuItems.map((item, idx) => (
            <ListItem
              component="button"
              key={item.text}
              sx={{
                bgcolor: idx === 0 ? "#a5c8f7" : "transparent",
                color: idx === 0 ? "#23272e" : "#fff",
                borderRadius: 2.5,
                mb: 1,
                boxShadow:
                  idx === 0 ? "0 2px 12px 0 rgba(165,200,247,0.18)" : "none",
                fontWeight: idx === 0 ? 700 : 500,
                border: "none",
                transition: "box-shadow 0.3s, background 0.3s, color 0.3s",
                "&:hover": {
                  bgcolor: "#a5c8f7",
                  color: "#23272e",
                  boxShadow: "0 2px 12px 0 rgba(165,200,247,0.18)",
                  border: "none",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                {item.text === "Чаты" ? (
                  <Badge
                    badgeContent={3}
                    color="error"
                    sx={{
                      "& .MuiBadge-badge": {
                        right: -3,
                        top: 3,
                        border: "2px solid #23272e",
                        padding: "0 4px",
                      },
                    }}
                  >
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Avatar
              src="https://randomuser.me/api/portraits/women/44.jpg"
              sx={{ width: 48, height: 48 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography fontWeight={600}>Ольга Иванова</Typography>
              <Typography variant="body2" color="text.secondary">
                Врач-ортодонт
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                <SettingsIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "error.main" },
                }}
              >
                <ExitToAppIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Drawer>
  );
}

import React from "react";
import { Box, Avatar, Typography, Button, Paper } from "@mui/material";

const ManagerChat = ({ name, avatarUrl, onMessageClick }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f5f8fa",
        color: "#23272e",
        boxShadow: "0 8px 32px 0 rgba(165,200,247,0.18)",
        transition: "box-shadow 0.3s, background 0.3s",
        width: "100%",
        height: "100%",
        minHeight: "unset",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(135deg,rgb(35, 85, 151) 0%, #e6eef7 100%)",
          borderRadius: "50%",
          p: "4px",
          mb: 2.5,
          boxShadow: "0 4px 16px 0 rgba(165,200,247,0.18)",
          display: "inline-flex",
        }}
      >
        <Avatar
          src={avatarUrl}
          sx={{
            width: 104,
            height: 104,
            border: "4px solid #fff",
            boxShadow: "0 2px 12px 0 rgba(165,200,247,0.18)",
            background: "#fff",
          }}
        />
      </Box>
      <Typography
        fontWeight={700}
        sx={{ mb: 2, fontSize: 24, textAlign: "center", letterSpacing: 0.2 }}
      >
        {name}
      </Typography>
      <Button
        variant="contained"
        sx={{
          borderRadius: 3,
          fontWeight: 700,
          px: 5,
          py: 1.5,
          fontSize: 18,
          background:
            "linear-gradient(90deg,rgb(93, 163, 255) 0%, #b7d6f8 100%)",
          boxShadow: "0 2px 8px 0 rgba(165,200,247,0.10)",
          textTransform: "none",
          transition: "background 0.2s, box-shadow 0.2s",
          "&:hover": {
            background:
              "linear-gradient(90deg, #b7d6f8 0%,rgb(111, 171, 250) 100%)",
            boxShadow: "0 4px 16px 0 rgba(165,200,247,0.18)",
          },
        }}
        onClick={onMessageClick}
      >
        Написать
      </Button>
    </Paper>
  );
};

export default ManagerChat;

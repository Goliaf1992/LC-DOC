import React from "react";
import { Paper, Typography, Box, IconButton, Badge } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function LabResultsCard() {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
        border: "1px solid rgba(165,200,247,0.2)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(165,200,247,0.2)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#23272e",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Badge badgeContent={3} color="error">
            <NotificationsActiveIcon sx={{ color: "#23272e" }} />
          </Badge>
          Результаты анализов
        </Typography>
        <IconButton
          size="small"
          sx={{
            color: "#23272e",
            "&:hover": {
              background: "rgba(35, 39, 46, 0.04)",
            },
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Typography
        variant="body2"
        sx={{
          color: "#546e7a",
          lineHeight: 1.6,
          fontSize: "0.9rem",
        }}
      >
        У вас есть 3 новых результата анализов, готовых к просмотру
      </Typography>
    </Paper>
  );
}

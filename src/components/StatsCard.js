import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function StatsCard({ title, value, caption, onAnalytics }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight={700}>
          {value}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {caption}
        </Typography>
      </div>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<BarChartIcon />}
          sx={{ borderRadius: 2, fontWeight: 600, textTransform: "none" }}
          onClick={onAnalytics || (() => alert("Аналитика скоро будет!"))}
        >
          Смотреть аналитику
        </Button>
      </Box>
    </Paper>
  );
}

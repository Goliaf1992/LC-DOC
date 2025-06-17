import React from "react";
import { Paper, Typography } from "@mui/material";

export default function StatsCard({ title, value, caption }) {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4, height: "100%" }}>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h4" fontWeight={700}>
        {value}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {caption}
      </Typography>
    </Paper>
  );
}

import React from "react";
import { Box } from "@mui/material";

export default function FormatBadge({ format }) {
  const color =
    format === "Онлайн"
      ? "#a5c8f7"
      : format === "В клинике"
      ? "#4caf50"
      : "#bdbdbd";
  const textColor = format === "Онлайн" ? "#23272e" : "#fff";
  return (
    <Box
      sx={{
        display: "inline-block",
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        bgcolor: color,
        color: textColor,
        fontSize: 13,
        fontWeight: 600,
        minWidth: 70,
        textAlign: "center",
      }}
    >
      {format}
    </Box>
  );
}

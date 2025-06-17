import React from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function LabResultsCard({ fileName }) {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle2">Новые результаты анализов</Typography>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {fileName}
      </Typography>
    </Paper>
  );
}

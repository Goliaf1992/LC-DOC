import React from "react";
import { Paper, Typography, Box, Avatar, Button } from "@mui/material";

export default function ConsultationRequests({ request }) {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4, height: "100%" }}>
      <Typography variant="subtitle2">Запросы на консультацию</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Avatar src={request.avatar} sx={{ width: 48, height: 48, mr: 2 }} />
        <Box>
          <Typography fontWeight={600}>{request.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {request.age} лет • {request.format}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {request.note}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {request.date} • {request.time}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              size="small"
              variant="contained"
              sx={{ mr: 1, borderRadius: 2 }}
            >
              Принять
            </Button>
            <Button size="small" variant="outlined" sx={{ borderRadius: 2 }}>
              Отклонить
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

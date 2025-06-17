import React from "react";
import { Paper, Typography, Box, Divider, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function OrdersTable({ orders, FormatBadge, cardVariants }) {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4, height: "100%" }}>
      <Typography variant="subtitle2" color="text.secondary">
        Заказанные услуги
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          px: 1,
          bgcolor: "#f5f8fa",
          borderRadius: 2,
          boxShadow: "0 2px 8px 0 rgba(165,200,247,0.06)",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ width: 140, color: "#23272e", fontWeight: 700 }}
        >
          Название
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ width: 100, color: "#23272e", fontWeight: 700 }}
        >
          Дата
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ width: 110, color: "#23272e", fontWeight: 700 }}
        >
          Время
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ width: 100, color: "#23272e", fontWeight: 700 }}
        >
          Формат
        </Typography>
        <Box sx={{ width: 40 }} />
      </Box>
      <Divider sx={{ mb: 1 }} />
      {orders.map((o, idx) => (
        <Box
          key={o.name}
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            bgcolor: idx % 2 === 0 ? "#f5f8fa" : "transparent",
            borderRadius: 2,
            p: 1,
            boxShadow: idx % 2 === 0 ? 1 : 0,
          }}
        >
          <Typography sx={{ width: 140, fontWeight: 500 }}>{o.name}</Typography>
          <Typography sx={{ width: 100 }}>{o.date}</Typography>
          <Typography sx={{ width: 110 }}>{o.time}</Typography>
          <Box sx={{ width: 100 }}>
            <FormatBadge format={o.format} />
          </Box>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>
      ))}
    </Paper>
  );
}

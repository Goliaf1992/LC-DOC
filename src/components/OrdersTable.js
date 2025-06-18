import React from "react";
import {
  Paper,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function OrdersTable({ orders, FormatBadge, cardVariants }) {
  const handleOrderAligners = () => {
    alert("Заказ элайнеров!");
  };
  const handleOrderSurgicalGuide = () => {
    alert("Заказ хирургического шаблона!");
  };

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4, height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 3, fontWeight: 700, px: 3, py: 1, fontSize: 15 }}
          onClick={handleOrderAligners}
        >
          Заказать элайнеры
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 3, fontWeight: 700, px: 3, py: 1, fontSize: 15 }}
          onClick={handleOrderSurgicalGuide}
        >
          Заказать хирургический шаблон
        </Button>
      </Box>
      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
        Заказанные услуги
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#f5f8fa" }}>
              <TableCell sx={{ fontWeight: 700, width: 180 }}>
                Название
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, width: 100, textAlign: "center" }}
              >
                Дата
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, width: 110, textAlign: "center" }}
              >
                Время
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, width: 120, textAlign: "center" }}
              >
                Формат
              </TableCell>
              <TableCell sx={{ width: 40 }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary">Нет заказов</Typography>
                </TableCell>
              </TableRow>
            ) : (
              orders.map((o, idx) => (
                <TableRow
                  key={o.name}
                  hover
                  sx={{ background: idx % 2 === 0 ? "#f5f8fa" : "#fff" }}
                >
                  <TableCell sx={{ fontWeight: 500 }}>{o.name}</TableCell>
                  <TableCell align="center">{o.date || "-"}</TableCell>
                  <TableCell align="center">{o.time || "-"}</TableCell>
                  <TableCell align="center">
                    <FormatBadge format={o.format} />
                  </TableCell>
                  <TableCell align="center">
                    <IconButton size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

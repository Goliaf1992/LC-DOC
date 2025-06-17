import React from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import CalendarBlock from "./CalendarBlock";

export default function OperationSchedule({ date, setDate, schedule }) {
  // schedule: [{ time: '09:00', name: 'Иванов Иван' }, ...]
  return (
    <Paper sx={{ display: "flex", p: 3, borderRadius: 4, minHeight: 400 }}>
      {/* Календарь слева */}
      <Box sx={{ minWidth: 320, pr: 4, borderRight: "1px solid #e0e0e0" }}>
        <CalendarBlock
          date={date}
          setDate={setDate}
          calendarStats={{ online: 0, inClinic: 0, homeVisits: 0 }}
        />
      </Box>
      {/* Таблица расписания справа */}
      <Box sx={{ flex: 1, pl: 4 }}>
        <Typography variant="h6" fontWeight={700} mb={2}>
          Расписание на {date.toLocaleDateString("ru-RU")}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Время</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Имя пациента</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2} align="center" sx={{ color: "#888" }}>
                  Нет операций на выбранную дату
                </TableCell>
              </TableRow>
            ) : (
              schedule.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}

import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarBlock({ date, setDate, calendarStats }) {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <CalendarMonthIcon sx={{ mr: 1 }} />
        <Typography variant="subtitle2">Март, 2025</Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "#23272e",
          color: "#fff",
          borderRadius: 3,
          p: 2,
          mb: 2,
          "& .react-calendar": {
            background: "transparent",
            border: "none",
            color: "#fff",
          },
          "& .react-calendar__navigation button": { color: "#23272e" },
          "& .react-calendar__navigation__label": {
            color: "#23272e",
            fontWeight: 700,
          },
          "& .react-calendar__navigation__arrow": { color: "#23272e" },
          "& .react-calendar__tile--active": {
            background: "#a5c8f7",
            color: "#23272e",
            borderRadius: 2,
          },
          "& .react-calendar__tile": {
            borderRadius: 2,
            transition: "0.2s",
            fontWeight: 500,
          },
          "& .react-calendar__tile:enabled:hover": {
            background: "#b7d6f8",
            color: "#23272e",
          },
        }}
      >
        <Calendar
          value={date}
          onChange={setDate}
          minDetail="month"
          showNeighboringMonth={false}
          tileClassName={({ date: d }) =>
            d.getDate() === 18 && d.getMonth() === 2 && d.getFullYear() === 2025
              ? "selected-calendar-day"
              : undefined
          }
        />
      </Box>
      <Typography variant="body2">Онлайн: {calendarStats.online}</Typography>
      <Typography variant="body2">
        В клинике: {calendarStats.inClinic}
      </Typography>
      <Typography variant="body2">
        На дому: {calendarStats.homeVisits}
      </Typography>
    </Paper>
  );
}

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
          "& .react-calendar__navigation": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
            padding: "8px 0",
          },
          "& .react-calendar__navigation button": {
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "16px",
            backgroundColor: "transparent",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            minWidth: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              color: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.15)",
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.95)",
            },
            "&:disabled": {
              color: "rgba(255,255,255,0.3)",
              cursor: "not-allowed",
              "&:hover": {
                backgroundColor: "transparent",
                transform: "none",
              },
            },
          },
          "& .react-calendar__navigation__label": {
            color: "#23272e",
            fontWeight: 700,
            fontSize: "18px",
            textAlign: "center",
            padding: "8px 16px",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            cursor: "pointer",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              color: "#111111",
            },
          },
          "& .react-calendar__navigation__arrow": {
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: 700,
            "&:hover": {
              color: "#ffffff",
            },
          },
          "& .react-calendar__tile--active": {
            background: "#a5c8f7",
            color: "#000000",
            borderRadius: 2,
          },
          "& .react-calendar__tile": {
            borderRadius: 2,
            transition: "0.2s",
            fontWeight: 500,
          },
          "& .react-calendar__tile:enabled:hover": {
            background: "#b7d6f8",
            color: "#111111",
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
    </Paper>
  );
}

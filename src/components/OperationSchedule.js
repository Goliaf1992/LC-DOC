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
import {
  AddPatientButton,
  CalendarPatientActionsMenu,
  ChangeOperationTimeForm,
} from "./index";

export default function OperationSchedule({
  date,
  setDate,
  schedule,
  onCancelOperation,
  onChangeOperationTime,
  onWriteToPatient,
}) {
  const [changeTimeFormOpen, setChangeTimeFormOpen] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState(null);

  const handleChangeTime = (patient) => {
    setSelectedPatient(patient);
    setChangeTimeFormOpen(true);
  };

  const handleSaveTimeChange = (formData) => {
    console.log("handleSaveTimeChange called with:", {
      formData,
      selectedPatient,
      currentDate: date.toISOString(),
    });

    if (selectedPatient && onChangeOperationTime) {
      // Создаём дату в локальном часовом поясе
      const [year, month, day] = formData.date.split("-").map(Number);
      const newDate = new Date(year, month - 1, day); // month - 1 потому что месяцы в JS начинаются с 0

      console.log("New date object:", newDate.toISOString());
      console.log(
        "Formatted new date:",
        `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
          2,
          "0"
        )}`
      );

      onChangeOperationTime(selectedPatient.name, date, newDate, formData.time);
    }
    setChangeTimeFormOpen(false);
    setSelectedPatient(null);
  };

  const handleCancelOperation = (patient) => {
    if (onCancelOperation) {
      onCancelOperation(patient.name, date);
    }
  };

  const handleWriteToPatient = (patient) => {
    if (onWriteToPatient && patient.phone) {
      onWriteToPatient(patient.phone);
    }
  };

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight={700}>
            Расписание на {date.toLocaleDateString("ru-RU")}
          </Typography>
          <AddPatientButton />
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Время</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Имя пациента</TableCell>
              <TableCell sx={{ fontWeight: 700, width: 60 }}>
                Действия
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center" sx={{ color: "#888" }}>
                  Нет операций на выбранную дату
                </TableCell>
              </TableRow>
            ) : (
              schedule.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <CalendarPatientActionsMenu
                      onCancelOperation={() => handleCancelOperation(item)}
                      onWriteToPatient={() => handleWriteToPatient(item)}
                      onChangeTime={() => handleChangeTime(item)}
                      patientPhone={item.phone}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Box>

      {/* Форма изменения времени */}
      <ChangeOperationTimeForm
        open={changeTimeFormOpen}
        onClose={() => setChangeTimeFormOpen(false)}
        onSave={handleSaveTimeChange}
        currentDate={`${date.getFullYear()}-${String(
          date.getMonth() + 1
        ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`}
        currentTime={selectedPatient?.time}
        patientName={selectedPatient?.name}
      />
    </Paper>
  );
}

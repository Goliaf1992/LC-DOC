import React from "react";
import {
  Paper,
  Typography,
  Box,
  Divider,
  Avatar,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AddPatientButton, PatientActionsMenu } from "./index";

export default function PatientTable({
  patients,
  FormatBadge,
  cardVariants,
  onAddPatient,
  onDeletePatient,
  onAddPatientToSchedule,
}) {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Фильтрация пациентов по поисковому запросу
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4 }}>
      <AddPatientButton
        onManual={onAddPatient}
        onSelectFromList={onAddPatientToSchedule}
        patients={patients}
        selectedDate={new Date()}
        showSelectFromList={false}
      />
      {/* Поле поиска */}
      <Box sx={{ mb: 3 }}>
        <TextField
          placeholder="Поиск по имени пациента..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#f5f8fa",
            },
          }}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#f5f8fa" }}>
              <TableCell sx={{ fontWeight: 700, width: 180 }}>
                Имя пациента
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
            {filteredPatients.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary">
                    {searchTerm
                      ? "Пациенты не найдены"
                      : "Список пациентов пуст"}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredPatients.map((p) => (
                <TableRow key={p.name} hover sx={{ background: "#f5f8fa" }}>
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      py: 1,
                    }}
                  >
                    <Avatar src={p.avatar} sx={{ width: 44, height: 44 }} />
                    <Typography
                      sx={{
                        fontWeight: 500,
                        maxWidth: 120,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{p.date || "-"}</TableCell>
                  <TableCell align="center">{p.time || "-"}</TableCell>
                  <TableCell align="center">
                    <FormatBadge format={p.format} />
                  </TableCell>
                  <TableCell align="center">
                    <PatientActionsMenu
                      onDelete={() => onDeletePatient && onDeletePatient(p)}
                      onViewStudies={() => alert("Смотреть исследования")}
                      onAssignOperation={() => alert("Назначить операцию")}
                      onViewMedCard={() => alert("Медкарта")}
                      onWriteToPatient={() => {
                        if (p.phone) {
                          const phoneNumber = p.phone.replace(/\D/g, "");
                          const whatsappUrl = `https://wa.me/${phoneNumber}`;
                          window.open(whatsappUrl, "_blank");
                        }
                      }}
                      patientPhone={p.phone}
                    />
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

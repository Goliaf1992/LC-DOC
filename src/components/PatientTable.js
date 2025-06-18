import React from "react";
import { Paper, Typography, Box, Divider, Avatar } from "@mui/material";
import { AddPatientButton, PatientActionsMenu } from "./index";

export default function PatientTable({
  patients,
  FormatBadge,
  cardVariants,
  onAddPatient,
  onDeletePatient,
  onAddPatientToSchedule,
}) {
  return (
    <Paper elevation={2} sx={{ p: 3, borderRadius: 4 }}>
      <AddPatientButton
        onManual={onAddPatient}
        onSelectFromList={onAddPatientToSchedule}
        patients={patients}
        selectedDate={new Date()}
        showSelectFromList={false}
      />
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
          Имя пациента
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
      {patients.map((p, idx) => (
        <Box
          key={p.name}
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
          <Avatar src={p.avatar} sx={{ mr: 2, width: 44, height: 44 }} />
          <Typography sx={{ width: 140, fontWeight: 500 }}>{p.name}</Typography>
          <Typography sx={{ width: 100 }}>{p.date}</Typography>
          <Typography sx={{ width: 110 }}>{p.time}</Typography>
          <Box sx={{ width: 100 }}>
            <FormatBadge format={p.format} />
          </Box>
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
        </Box>
      ))}
    </Paper>
  );
}

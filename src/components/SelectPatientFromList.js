import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Avatar,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

export default function SelectPatientFromList({
  open,
  onClose,
  onAddPatient,
  patients,
  selectedDate,
}) {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Фильтрация пациентов по поисковому запросу
  const filteredPatients = (patients || []).filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPatient = (patient) => {
    if (onAddPatient) {
      onAddPatient(patient, selectedDate);
    }
  };

  const handleClose = () => {
    setSearchTerm("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Добавить пациента из списка
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Выберите пациента для добавления в расписание на{" "}
          {selectedDate?.toLocaleDateString("ru-RU")}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
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
            sx={{ mb: 2 }}
          />

          {filteredPatients.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography color="text.secondary">
                {searchTerm ? "Пациенты не найдены" : "Список пациентов пуст"}
              </Typography>
            </Box>
          ) : (
            <List sx={{ maxHeight: 400, overflow: "auto" }}>
              {filteredPatients.map((patient, index) => (
                <ListItem
                  key={index}
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: 2,
                    mb: 1,
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                >
                  <Avatar
                    src={patient.avatar}
                    sx={{ mr: 2, width: 40, height: 40 }}
                  />
                  <ListItemText
                    primary={patient.name}
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Телефон: {patient.phone}
                        </Typography>
                        {patient.format && (
                          <Typography variant="body2" color="text.secondary">
                            Формат: {patient.format}
                          </Typography>
                        )}
                      </Box>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => handleAddPatient(patient)}
                      sx={{
                        color: "#4caf50",
                        "&:hover": {
                          backgroundColor: "rgba(76, 175, 80, 0.1)",
                        },
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Отмена
        </Button>
      </DialogActions>
    </Dialog>
  );
}

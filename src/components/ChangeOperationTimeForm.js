import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";

export default function ChangeOperationTimeForm({
  open,
  onClose,
  onSave,
  currentDate,
  currentTime,
  patientName,
  isAssignOperation = false,
}) {
  const [form, setForm] = React.useState({
    date: currentDate || new Date().toISOString().slice(0, 10),
    time: currentTime || "09:00",
  });

  React.useEffect(() => {
    if (open) {
      setForm({
        date: currentDate || new Date().toISOString().slice(0, 10),
        time: currentTime || "09:00",
      });
    }
  }, [open, currentDate, currentTime]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (onSave) onSave(form);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {isAssignOperation ? "Назначить операцию" : "Изменить время операции"}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Пациент: <strong>{patientName}</strong>
          </Typography>
          <TextField
            label="Дата операции"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            label="Время операции"
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Отмена
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

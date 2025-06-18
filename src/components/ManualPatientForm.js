import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";

const initialForm = {
  firstName: "",
  lastName: "",
  birthDate: "",
  city: "",
  phone: "",
};

export default function ManualPatientForm({ open, onClose, onSave }) {
  const [form, setForm] = React.useState(initialForm);

  React.useEffect(() => {
    if (!open) {
      setForm(initialForm);
    }
  }, [open]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (onSave) onSave(form);
    setForm(initialForm);
    onClose();
  };

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Добавить пациента вручную</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Имя"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Фамилия"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Дата рождения"
            name="birthDate"
            type="date"
            value={form.birthDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
          <TextField
            label="Город"
            name="city"
            value={form.city}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Номер телефона"
            name="phone"
            value={form.phone}
            onChange={handleChange}
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

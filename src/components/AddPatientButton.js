import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { ManualPatientForm, SelectPatientFromList } from "./index";

export default function AddPatientButton({
  onManual,
  onExcel,
  onSelectFromList,
  patients,
  selectedDate,
  showSelectFromList,
}) {
  const [open, setOpen] = React.useState(false);
  const [manualOpen, setManualOpen] = React.useState(false);
  const [selectFromListOpen, setSelectFromListOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleManual = () => {
    setOpen(false);
    setManualOpen(true);
  };

  const handleExcel = () => {
    setOpen(false);
    if (onExcel) onExcel();
  };

  const handleSelectFromList = () => {
    setOpen(false);
    setSelectFromListOpen(true);
  };

  const handleManualClose = () => setManualOpen(false);
  const handleManualSave = (data) => {
    if (onManual) onManual(data);
    setManualOpen(false);
  };

  const handleSelectFromListClose = () => setSelectFromListOpen(false);
  const handleSelectFromListAdd = (patient, date) => {
    if (onSelectFromList) onSelectFromList(patient, date);
    setSelectFromListOpen(false);
  };

  return (
    <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: 3, fontWeight: 700, px: 4, py: 1.5, fontSize: 16 }}
        onClick={handleOpen}
      >
        Добавить пациента
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Добавление пациента</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <Button
              variant="outlined"
              onClick={handleManual}
              sx={{ borderRadius: 2, fontWeight: 600 }}
            >
              Ввести данные вручную
            </Button>
            <Button
              variant="outlined"
              onClick={handleExcel}
              sx={{ borderRadius: 2, fontWeight: 600 }}
            >
              Загрузить Excel-файл
            </Button>
            {showSelectFromList && (
              <Button
                variant="outlined"
                onClick={handleSelectFromList}
                sx={{ borderRadius: 2, fontWeight: 600 }}
              >
                Добавить из моих пациентов
              </Button>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
      <ManualPatientForm
        open={manualOpen}
        onClose={handleManualClose}
        onSave={handleManualSave}
      />
      <SelectPatientFromList
        open={selectFromListOpen}
        onClose={handleSelectFromListClose}
        onAddPatient={handleSelectFromListAdd}
        patients={patients}
        selectedDate={selectedDate}
      />
    </Box>
  );
}

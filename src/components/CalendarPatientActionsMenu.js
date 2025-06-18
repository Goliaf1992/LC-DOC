import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CancelIcon from "@mui/icons-material/Cancel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ScheduleIcon from "@mui/icons-material/Schedule";

export default function CalendarPatientActionsMenu({
  onCancelOperation,
  onWriteToPatient,
  onChangeTime,
  patientPhone,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleCancelOperation = () => {
    handleClose();
    if (onCancelOperation) onCancelOperation();
  };

  const handleWriteToPatient = () => {
    handleClose();
    if (onWriteToPatient) onWriteToPatient();
  };

  const handleChangeTime = () => {
    handleClose();
    if (onChangeTime) onChangeTime();
  };

  return (
    <>
      <IconButton size="small" onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleCancelOperation} sx={{ color: "error.main" }}>
          <ListItemIcon>
            <CancelIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>Отмена операции</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleChangeTime}>
          <ListItemIcon>
            <ScheduleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Изменить время</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleWriteToPatient} disabled={!patientPhone}>
          <ListItemIcon>
            <WhatsAppIcon fontSize="small" sx={{ color: "#25D366" }} />
          </ListItemIcon>
          <ListItemText>Написать пациенту</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

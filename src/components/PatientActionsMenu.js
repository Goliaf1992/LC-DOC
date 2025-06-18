import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ScienceIcon from "@mui/icons-material/Science";

export default function PatientActionsMenu({
  onDelete,
  onViewStudies,
  onAssignOperation,
  onViewMedCard,
  onWriteToPatient,
  onAssignAnalysis,
  patientPhone,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDelete = () => {
    handleClose();
    if (onDelete) onDelete();
  };
  const handleViewStudies = () => {
    handleClose();
    if (onViewStudies) onViewStudies();
  };
  const handleAssignOperation = () => {
    handleClose();
    if (onAssignOperation) onAssignOperation();
  };
  const handleViewMedCard = () => {
    handleClose();
    if (onViewMedCard) onViewMedCard();
  };
  const handleAssignAnalysis = () => {
    handleClose();
    if (onAssignAnalysis) onAssignAnalysis();
  };
  const handleWriteToPatient = () => {
    handleClose();
    if (onWriteToPatient) onWriteToPatient();
  };

  return (
    <>
      <IconButton size="small" onClick={handleOpen}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleWriteToPatient} disabled={!patientPhone}>
          <ListItemIcon>
            <WhatsAppIcon fontSize="small" sx={{ color: "#25D366" }} />
          </ListItemIcon>
          <ListItemText>Написать пациенту</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleViewStudies}>
          <ListItemIcon>
            <AssignmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Смотреть исследования</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleAssignOperation}>
          <ListItemIcon>
            <EventAvailableIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Назначить операцию</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleAssignAnalysis}>
          <ListItemIcon>
            <ScienceIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Назначить анализ</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleViewMedCard}>
          <ListItemIcon>
            <FolderSharedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Медкарта</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>Удалить</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

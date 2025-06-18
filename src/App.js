import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import {
  Sidebar,
  StatsCard,
  OrdersTable,
  PatientTable,
  ConsultationRequests,
  LabResultsCard,
  CalendarBlock,
  FormatBadge,
  ManagerChat,
  DashboardFilters,
  AddPatientButton,
  OperationSchedule,
  StatsSparkline,
  ChangeOperationTimeForm,
} from "./components";

import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import BarChartIcon from "@mui/icons-material/BarChart";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpIcon from "@mui/icons-material/Help";

const menuItems = [
  { text: "Дашборд", icon: <DashboardIcon /> },
  { text: "Приёмы", icon: <EventIcon /> },
  { text: "Мои курсы", icon: <EventIcon /> },
  { text: "Чаты", icon: <ChatIcon /> },
  { text: "Аналитика", icon: <BarChartIcon /> },
  { text: "Платежи", icon: <PaymentIcon /> },
  { text: "Помощь", icon: <HelpIcon /> },
];

const patients = [
  {
    id: 1,
    name: "Анна Петрова",
    phone: "+7 (999) 123-45-67",
    format: "Онлайн",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Мария Сидорова",
    phone: "+7 (999) 234-56-78",
    format: "В клинике",
    avatar:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Елена Козлова",
    phone: "+7 (999) 345-67-89",
    format: "Онлайн",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Дмитрий Иванов",
    phone: "+7 (999) 456-78-90",
    format: "В клинике",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Алексей Смирнов",
    phone: "+7 (999) 567-89-01",
    format: "Онлайн",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

const orders = [
  {
    name: "Заказ 1",
    date: "18.03.2025",
    time: "09:00 - 10:00",
    format: "В пути",
  },
  {
    name: "Заказ 2",
    date: "18.03.2025",
    time: "11:00 - 12:00",
    format: "В клинике",
  },
  {
    name: "Заказ 3",
    date: "18.03.2025",
    time: "12:00 - 13:00",
    format: "В клинике",
  },
  {
    name: "Заказ 4",
    date: "18.03.2025",
    time: "15:00 - 15:30",
    format: "В пути",
  },
  {
    name: "Заказ 5",
    date: "18.03.2025",
    time: "15:30 - 16:00",
    format: "В клинике",
  },
];

const consultationRequest = {
  name: "Олег Нагаев",
  age: 21,
  format: "Онлайн",
  avatar: "https://randomuser.me/api/portraits/men/36.jpg",
  note: "Жалуется на боль в ВНЧС.",
  date: "18.03.2025",
  time: "16:00 - 17:00",
};

const calendarStats = { online: 6, inClinic: 4, homeVisits: 0 };

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      type: "spring",
    },
  }),
};
const hoverEffect = {
  whileHover: { scale: 1.03, boxShadow: "0 6px 24px 0 rgba(165,200,247,0.18)" },
};

// Пример данных для расписания операций
const initialSchedules = {
  "2025-03-18": [
    { time: "09:00", name: "Анна Кузнецова", phone: "+7 (999) 123-45-67" },
    { time: "11:00", name: "Екатерина Смирнова", phone: "+7 (999) 234-56-78" },
    { time: "15:00", name: "Тимур Давыдов", phone: "+7 (999) 456-78-90" },
  ],
  "2025-03-19": [
    { time: "10:00", name: "Ольга Морозова", phone: "+7 (999) 345-67-89" },
    { time: "13:00", name: "Андрей Соколов", phone: "+7 (999) 567-89-01" },
  ],
};

export default function App() {
  const [date, setDate] = React.useState(new Date(2025, 2, 18));
  const [selectedFilter, setSelectedFilter] = React.useState("patients");
  const [schedules, setSchedules] = React.useState(initialSchedules);
  const [assignOperationFormOpen, setAssignOperationFormOpen] =
    React.useState(false);
  const [selectedPatientForOperation, setSelectedPatientForOperation] =
    React.useState(null);
  const [patients, setPatients] = React.useState([
    {
      id: 1,
      name: "Анна Петрова",
      phone: "+7 (999) 123-45-67",
      format: "Онлайн",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Мария Сидорова",
      phone: "+7 (999) 234-56-78",
      format: "В клинике",
      avatar:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Елена Козлова",
      phone: "+7 (999) 345-67-89",
      format: "Онлайн",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Дмитрий Иванов",
      phone: "+7 (999) 456-78-90",
      format: "В клинике",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Алексей Смирнов",
      phone: "+7 (999) 567-89-01",
      format: "Онлайн",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
  ]);

  // Функция для получения расписания на определенную дату
  const getScheduleForDate = (date) => {
    const key = date.toISOString().slice(0, 10);
    return schedules[key] || [];
  };

  // Функция для сортировки расписания по времени
  const getSortedScheduleForDate = (date) => {
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
    const scheduleForDate = schedules[key] || [];
    const sortedSchedule = scheduleForDate.sort((a, b) =>
      a.time.localeCompare(b.time)
    );

    console.log("getSortedScheduleForDate:", {
      date: date.toISOString(),
      key,
      scheduleForDate,
      sortedSchedule,
    });

    return sortedSchedule;
  };

  // Отмена операции
  const handleCancelOperation = (patientName, operationDate) => {
    const key = `${operationDate.getFullYear()}-${String(
      operationDate.getMonth() + 1
    ).padStart(2, "0")}-${String(operationDate.getDate()).padStart(2, "0")}`;
    setSchedules((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item.name !== patientName),
    }));
  };

  // Изменение времени операции
  const handleChangeOperationTime = (
    patientName,
    oldDate,
    newDate,
    newTime
  ) => {
    console.log("handleChangeOperationTime called with:", {
      patientName,
      oldDate: oldDate.toISOString(),
      newDate: newDate.toISOString(),
      newTime,
    });

    // Форматируем даты в YYYY-MM-DD без учёта часового пояса
    const oldKey = `${oldDate.getFullYear()}-${String(
      oldDate.getMonth() + 1
    ).padStart(2, "0")}-${String(oldDate.getDate()).padStart(2, "0")}`;
    const newKey = `${newDate.getFullYear()}-${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}-${String(newDate.getDate()).padStart(2, "0")}`;

    console.log("Keys:", { oldKey, newKey });

    setSchedules((prev) => {
      console.log("Current schedules:", prev);

      // Находим пациента в старом расписании
      const patient = prev[oldKey]?.find((item) => item.name === patientName);

      console.log("Found patient:", patient);

      if (!patient) {
        console.log("Patient not found in old schedule");
        return prev;
      }

      // Создаём новый объект расписания
      const newSchedules = { ...prev };

      // Удаляем из старого расписания
      if (newSchedules[oldKey]) {
        newSchedules[oldKey] = newSchedules[oldKey].filter(
          (item) => item.name !== patientName
        );
      }

      // Добавляем в новое расписание
      if (!newSchedules[newKey]) {
        newSchedules[newKey] = [];
      }

      newSchedules[newKey] = [
        ...newSchedules[newKey],
        { ...patient, time: newTime },
      ];

      console.log("Updated schedules:", newSchedules);
      return newSchedules;
    });
  };

  // Написать пациенту через WhatsApp
  const handleWriteToPatientFromCalendar = (phone) => {
    if (phone) {
      const phoneNumber = phone.replace(/\D/g, "");
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  // Добавить пациента в расписание из списка
  const handleAddPatientToSchedule = (patient, scheduleDate) => {
    const key = `${scheduleDate.getFullYear()}-${String(
      scheduleDate.getMonth() + 1
    ).padStart(2, "0")}-${String(scheduleDate.getDate()).padStart(2, "0")}`;

    // Проверяем, не добавлен ли уже пациент на эту дату
    const existingPatient = schedules[key]?.find(
      (item) => item.name === patient.name
    );
    if (existingPatient) {
      alert(`Пациент ${patient.name} уже добавлен в расписание на эту дату`);
      return;
    }

    // Добавляем пациента в расписание с временем по умолчанию
    const newScheduleItem = {
      name: patient.name,
      time: "09:00", // время по умолчанию
      phone: patient.phone,
    };

    setSchedules((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), newScheduleItem],
    }));

    console.log(`Пациент ${patient.name} добавлен в расписание на ${key}`);
  };

  // Добавление пациента
  const handleAddPatient = (patient) => {
    setPatients((prev) => [
      ...prev,
      {
        name: `${patient.firstName} ${patient.lastName}`,
        date: "-",
        time: "-",
        format: "-",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        phone: patient.phone || "+7 (999) 000-00-00", // номер телефона по умолчанию
        ...patient,
      },
    ]);
  };

  // Добавление пациента в календарь с проверкой существования
  const handleAddPatientToCalendar = (patient) => {
    const fullName = `${patient.firstName} ${patient.lastName}`;

    // Проверяем, существует ли пациент в глобальном списке
    const existingPatient = patients.find((p) => p.name === fullName);

    if (!existingPatient) {
      // Если пациента нет, добавляем в глобальный список
      setPatients((prev) => [
        ...prev,
        {
          name: fullName,
          date: "-",
          time: "-",
          format: "-",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
          phone: patient.phone || "+7 (999) 000-00-00",
          ...patient,
        },
      ]);

      // Показываем алерт о новом пациенте
      alert(`Новый пациент ${fullName} добавлен!`);
    }

    // Добавляем пациента в расписание на текущую дату
    const patientForSchedule = existingPatient || {
      name: fullName,
      phone: patient.phone || "+7 (999) 000-00-00",
    };

    handleAddPatientToSchedule(patientForSchedule, date);
  };

  // Удаление пациента
  const handleDeletePatient = (patient) => {
    setPatients((prev) => prev.filter((p) => p.name !== patient.name));
  };

  // Назначение операции из таблицы пациентов
  const handleAssignOperationFromTable = (patient, newDate, newTime) => {
    console.log("handleAssignOperationFromTable called with:", {
      patient: patient.name,
      newDate: newDate.toISOString(),
      newTime,
    });

    // Форматируем дату в YYYY-MM-DD
    const newKey = `${newDate.getFullYear()}-${String(
      newDate.getMonth() + 1
    ).padStart(2, "0")}-${String(newDate.getDate()).padStart(2, "0")}`;

    console.log("New schedule key:", newKey);

    setSchedules((prev) => {
      console.log("Current schedules:", prev);

      // Проверяем, не добавлен ли уже пациент на эту дату
      const existingPatient = prev[newKey]?.find(
        (item) => item.name === patient.name
      );
      if (existingPatient) {
        alert(`Пациент ${patient.name} уже добавлен в расписание на эту дату`);
        return prev;
      }

      // Создаём новый объект расписания
      const newSchedules = { ...prev };

      // Добавляем в новое расписание
      if (!newSchedules[newKey]) {
        newSchedules[newKey] = [];
      }

      newSchedules[newKey] = [
        ...newSchedules[newKey],
        {
          name: patient.name,
          time: newTime,
          phone: patient.phone,
        },
      ];

      console.log("Updated schedules:", newSchedules);
      return newSchedules;
    });
  };

  // Открытие формы назначения операции
  const handleOpenAssignOperationForm = (patient) => {
    setSelectedPatientForOperation(patient);
    setAssignOperationFormOpen(true);
  };

  // Сохранение назначения операции
  const handleSaveAssignOperation = (formData) => {
    if (selectedPatientForOperation) {
      const [year, month, day] = formData.date.split("-").map(Number);
      const newDate = new Date(year, month - 1, day);

      handleAssignOperationFromTable(
        selectedPatientForOperation,
        newDate,
        formData.time
      );
    }
    setAssignOperationFormOpen(false);
    setSelectedPatientForOperation(null);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#e6eef7" }}>
      <CssBaseline />
      <Sidebar menuItems={menuItems} />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 4, pl: 0, ml: "150px", height: "100vh" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 4,
            height: "100%",
          }}
        >
          {/* Центральная область */}
          <Box sx={{ flex: 1, height: "100%" }}>
            <DashboardFilters
              selected={selectedFilter}
              onChange={setSelectedFilter}
            />
            <Box
              sx={{
                background: "#fff",
                borderRadius: 4,
                height: "calc(100% - 56px)", // 56px — примерная высота фильтров
                boxShadow: "0 2px 12px 0 rgba(165,200,247,0.10)",
                p: 3,
                overflow: "auto",
              }}
            >
              {selectedFilter === "patients" && (
                <PatientTable
                  patients={patients}
                  FormatBadge={FormatBadge}
                  onAddPatient={handleAddPatient}
                  onDeletePatient={handleDeletePatient}
                  onAddPatientToSchedule={handleAddPatientToSchedule}
                  onAssignOperation={handleOpenAssignOperationForm}
                />
              )}
              {selectedFilter === "calendar" && (
                <OperationSchedule
                  date={date}
                  setDate={setDate}
                  schedule={getSortedScheduleForDate(date)}
                  onCancelOperation={handleCancelOperation}
                  onChangeOperationTime={handleChangeOperationTime}
                  onWriteToPatient={handleWriteToPatientFromCalendar}
                  onAddPatientToSchedule={handleAddPatientToSchedule}
                  onAddPatientToCalendar={handleAddPatientToCalendar}
                  patients={patients}
                />
              )}
              {selectedFilter === "orders" && (
                <OrdersTable orders={orders} FormatBadge={FormatBadge} />
              )}
            </Box>
          </Box>
          {/* Правая колонка */}
          <Box
            sx={{
              width: 340,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              height: "100%",
            }}
          >
            <LabResultsCard />
            <ManagerChat
              name="Олег Нагаев"
              avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              position="Менеджер Лаборатории"
            />
            <StatsCard
              title="Общее кол-во пациентов"
              value={47}
              caption={<StatsSparkline />}
            />
            <StatsCard
              title="Общее кол-во запланированных операций"
              value={12}
              caption={<StatsSparkline color="#4caf50" />}
            />
          </Box>
        </Box>
      </Box>

      {/* Форма назначения операции */}
      <ChangeOperationTimeForm
        open={assignOperationFormOpen}
        onClose={() => setAssignOperationFormOpen(false)}
        onSave={handleSaveAssignOperation}
        currentDate={new Date().toISOString().slice(0, 10)}
        currentTime="09:00"
        patientName={selectedPatientForOperation?.name}
        isAssignOperation={true}
      />
    </Box>
  );
}

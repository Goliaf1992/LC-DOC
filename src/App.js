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
  { text: "Пациенты", icon: <PeopleIcon /> },
  { text: "Чаты", icon: <ChatIcon /> },
  { text: "Аналитика", icon: <BarChartIcon /> },
  { text: "Платежи", icon: <PaymentIcon /> },
  { text: "Помощь", icon: <HelpIcon /> },
];

const patients = [
  {
    name: "Анна Кузнецова",
    date: "18.03.2025",
    time: "09:00 - 10:00",
    format: "Онлайн",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Екатерина Смирнова",
    date: "18.03.2025",
    time: "11:00 - 12:00",
    format: "В клинике",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ольга Морозова",
    date: "18.03.2025",
    time: "12:00 - 13:00",
    format: "В клинике",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Тимур Давыдов",
    date: "18.03.2025",
    time: "15:00 - 15:30",
    format: "Онлайн",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Андрей Соколов",
    date: "18.03.2025",
    time: "15:30 - 16:00",
    format: "В клинике",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
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

export default function App() {
  const [date, setDate] = React.useState(new Date(2025, 2, 18));
  const [selectedFilter, setSelectedFilter] = React.useState("patients");

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
                <PatientTable patients={patients} FormatBadge={FormatBadge} />
              )}
              {selectedFilter === "calendar" && (
                <CalendarBlock
                  date={date}
                  setDate={setDate}
                  calendarStats={calendarStats}
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
              avatarUrl="https://randomuser.me/api/portraits/men/36.jpg"
            />
            <StatsCard
              title="Общее кол-во пациентов"
              value={47}
              caption={null}
            />
            <StatsCard
              title="Общее кол-во запланированных операций"
              value={12}
              caption={null}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

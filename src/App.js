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
    format: "Онлайн",
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
    format: "Онлайн",
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
  note: "Жалуется на сильные головные боли в течение последней недели.",
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

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#e6eef7" }}>
      <CssBaseline />
      <Sidebar menuItems={menuItems} />
      <Box component="main" sx={{ flexGrow: 1, p: 4, pl: 0 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1.1fr 0.9fr",
            gridTemplateRows: "120px 1.2fr 1.5fr",
            gridTemplateAreas: `
              "patients appointments lab"
              "diagnoses diagnoses consult"
              "table table calendar"
            `,
            gap: 3,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            {...hoverEffect}
            style={{ borderRadius: 16, gridArea: "patients" }}
          >
            <StatsCard
              title="Пациенты"
              value={47}
              caption={
                <>
                  За 7 дней <span style={{ color: "#4caf50" }}>+18.1%</span>
                </>
              }
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            {...hoverEffect}
            style={{ borderRadius: 16, gridArea: "appointments" }}
          >
            <StatsCard
              title="Приёмы"
              value={44}
              caption={
                <>
                  За 7 дней <span style={{ color: "#4caf50" }}>+12.5%</span>
                </>
              }
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            {...hoverEffect}
            style={{ borderRadius: 16, gridArea: "lab" }}
          >
            <LabResultsCard fileName="M_Reynolds_CBD.pdf" />
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            {...hoverEffect}
            style={{ borderRadius: 16, gridArea: "diagnoses" }}
          >
            <OrdersTable orders={orders} FormatBadge={FormatBadge} />
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={5}
            {...hoverEffect}
            style={{ borderRadius: 16, gridArea: "consult" }}
          >
            <ConsultationRequests request={consultationRequest} />
          </motion.div>
          <Box sx={{ gridArea: "table", mt: 0 }}>
            <PatientTable patients={patients} FormatBadge={FormatBadge} />
          </Box>
          <Box sx={{ gridArea: "calendar", mt: 0 }}>
            <CalendarBlock
              date={date}
              setDate={setDate}
              calendarStats={calendarStats}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

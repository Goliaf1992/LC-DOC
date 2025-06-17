import React from "react";
import { ButtonGroup, Button, Box } from "@mui/material";

const FILTERS = [
  { label: "Пациенты", value: "patients" },
  { label: "Календарь операций", value: "calendar" },
  { label: "Заказы", value: "orders" },
];

export default function DashboardFilters({ selected, onChange }) {
  return (
    <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
      <ButtonGroup
        variant="contained"
        sx={{
          boxShadow: "0 2px 12px 0 rgba(165,200,247,0.10)",
          borderRadius: 4,
        }}
      >
        {FILTERS.map((filter) => (
          <Button
            key={filter.value}
            onClick={() => onChange(filter.value)}
            sx={{
              borderRadius: 3,
              fontWeight: 600,
              px: 4,
              py: 1.5,
              fontSize: 16,
              background:
                selected === filter.value
                  ? "linear-gradient(90deg,rgb(93, 163, 255) 0%, #b7d6f8 100%)"
                  : "#f5f8fa",
              color: selected === filter.value ? "#23272e" : "#23272e",
              boxShadow:
                selected === filter.value
                  ? "0 2px 8px 0 rgba(165,200,247,0.10)"
                  : "none",
              transition: "background 0.2s, box-shadow 0.2s",
              "&:hover": {
                background:
                  selected === filter.value
                    ? "linear-gradient(90deg, #b7d6f8 0%,rgb(111, 171, 250) 100%)"
                    : "#e6eef7",
              },
            }}
          >
            {filter.label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}

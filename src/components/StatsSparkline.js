import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

// Мок-данные прироста за месяц
const data = [
  { value: 40 },
  { value: 42 },
  { value: 45 },
  { value: 50 },
  { value: 55 },
  { value: 60 },
  { value: 65 },
  { value: 70 },
  { value: 75 },
  { value: 80 },
  { value: 90 },
  { value: 100 },
];

export default function StatsSparkline({
  color = "#5da3ff",
  height = 36,
  values = data,
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart
        data={values}
        margin={{ top: 6, right: 0, left: 0, bottom: 0 }}
      >
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

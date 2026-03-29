// "use client";

// import { LineChart, Line, XAxis, YAxis } from "recharts";

// export default function SpendingLineChart({ data }: any) {
//   const chartData = Object.entries(data.trendMap || {}).map(
//     ([date, value]) => ({ date, value })
//   );

//   return (
//     <LineChart width={400} height={300} data={chartData}>
//       <XAxis dataKey="date" />
//       <YAxis />
//       <Line dataKey="value" stroke="#8884d8" />
//     </LineChart>
//   );
// }

"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function SpendingLineChart({ data }: any) {
  const chartData = Object.entries(data.trendMap || {}).map(
    ([date, value]) => ({ date, value })
  );

  return (
    <div className="w-full h-72">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 10 }}
          />

          <YAxis />

          <Tooltip
            formatter={(value: any) => `₹${value}`}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
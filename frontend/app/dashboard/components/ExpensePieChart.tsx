// "use client";

// import { PieChart, Pie, Cell } from "recharts";

// export default function ExpensePieChart({ data }: any) {
//   const chartData = Object.entries(data.categoryMap || {}).map(
//     ([name, value]) => ({ name, value })
//   );

//   return (
//     <PieChart width={300} height={300}>
//       <Pie data={chartData} dataKey="value" outerRadius={100}>
//         {chartData.map((_, i) => (
//           <Cell key={i} fill={`hsl(${i * 50},70%,50%)`} />
//         ))}
//       </Pie>
//     </PieChart>
//   );
// }

"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function ExpensePieChart({ data }: any) {
  const chartData = Object.entries(data.categoryMap || {}).map(
    ([name, value]) => ({ name, value })
  );

  const total = chartData.reduce((sum: number, item: any) => sum + item.value, 0);

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

  const renderLabel = (entry: any) => {
    const percent = ((entry.value / total) * 100).toFixed(0);
    return `${percent}%`;
  };

  return (
    <div className="flex justify-center">
      <PieChart width={320} height={320}>
        <Pie
          data={chartData}
          dataKey="value"
          outerRadius={110}
          label={renderLabel}
        >
          {chartData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          formatter={(value: any) => `₹${value}`}
        />

        <Legend />
      </PieChart>
    </div>
  );
}
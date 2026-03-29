"use client";

import { useEffect, useState } from "react";
import { getDashboard } from "../../services/reportService";

import SummaryCards from "./components/SummaryCards";
import ExpensePieChart from "./components/ExpensePieChart";
import SpendingLineChart from "./components/SpendingLineChart";

export default function DashboardPage() {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDashboard();
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <SummaryCards data={data} />

      <div className="flex gap-6">
        <ExpensePieChart data={data} />
        <SpendingLineChart data={data} />
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";
import { setBudget, getBudgets } from "../../services/budgetService";

import BudgetForm from "./components/BudgetForm";
import BudgetAlerts from "./components/BudgetAlerts";

export default function BudgetPage() {
  const [budgets, setBudgets] = useState([]);

  const fetchBudgets = async () => {
    const data = await getBudgets();
    setBudgets(data);
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const handleSubmit = async (form: any) => {
    await setBudget(form);
    fetchBudgets();
  };

  // return (
  //   <div className="p-6">
  //     <h1 className="text-2xl font-bold">Budgets</h1>

  //     <BudgetForm onSubmit={handleSubmit} />

  //     <BudgetAlerts budgets={budgets} />
  //   </div>
  // );

  return (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold">Budgets</h1>

    <BudgetForm onSubmit={handleSubmit} />

    <BudgetAlerts budgets={budgets} />
  </div>
);
}
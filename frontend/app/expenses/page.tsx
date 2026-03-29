"use client";

import { useEffect, useState } from "react";
import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../../services/expenseService";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilters from "./components/ExpenseFilters";

// ✅ Define Expense Type
type Expense = {
  _id: string;
  amount: number;
  category: string;
  date: string;
  paymentMethod: string;
  notes: string;
};

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selected, setSelected] = useState<Expense | null>(null);

  const [filters, setFilters] = useState({
    category: "",
    date: "",
  });

  // 🔄 Fetch expenses
  const fetchExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // ➕➖ Update / Add
  const handleSubmit = async (form: any) => {
    if (selected) {
      await updateExpense(selected._id, form);
    } else {
      await addExpense(form);
    }

    setSelected(null);
    fetchExpenses();
  };

  // ❌ Delete
  const handleDelete = async (id: string) => {
    await deleteExpense(id);
    fetchExpenses();
  };

  // 🔍 Filter logic
  const filteredExpenses = expenses.filter((exp) => {
    return (
      (!filters.category ||
        exp.category
          .toLowerCase()
          .includes(filters.category.toLowerCase())) &&
      (!filters.date || exp.date?.includes(filters.date))
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>

      {/* ➕ Add / Update Form */}
      <ExpenseForm onSubmit={handleSubmit} selected={selected} />

      {/* 🔍 Filters */}
      <ExpenseFilters filters={filters} setFilters={setFilters} />

      {/* 📋 List */}
      <ExpenseList
        expenses={filteredExpenses}
        onEdit={(exp: Expense) => setSelected(exp)}
        onDelete={handleDelete}
      />
    </div>
  );
}
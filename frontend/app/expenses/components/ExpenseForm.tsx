// "use client";

// import { useState, useEffect } from "react";

// export default function ExpenseForm({ onSubmit, selected }: any) {
//   const [form, setForm] = useState({
//     amount: "",
//     category: "",
//     date: "",
//     paymentMethod: "",
//     notes: "",
//   });

//   useEffect(() => {
//     if (selected) {
//       setForm(selected);
//     }
//   }, [selected]);

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     onSubmit(form);
//   };

//   return (
//     <form className="bg-white p-6 rounded shadow mb-4" onSubmit={handleSubmit}>
//       <input name="amount" placeholder="Amount" className="border p-2 w-full mb-2" onChange={handleChange} value={form.amount}/>
//       <input name="category" placeholder="Category" className="border p-2 w-full mb-2" onChange={handleChange} value={form.category}/>
//       <input type="date" name="date" className="border p-2 w-full mb-2" onChange={handleChange} value={form.date}/>
//       <input name="paymentMethod" placeholder="Payment Method" className="border p-2 w-full mb-2" onChange={handleChange} value={form.paymentMethod}/>
//       <input name="notes" placeholder="Notes" className="border p-2 w-full mb-2" onChange={handleChange} value={form.notes}/>

//       <button className="bg-green-600 text-white px-4 py-2 rounded">
//         {selected ? "Update" : "Add"} Expense
//       </button>
//     </form>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function ExpenseForm({ onSubmit, selected }: any) {
  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    paymentMethod: "",
    notes: "",
  });

  useEffect(() => {
    if (selected) {
      setForm(selected);
    }
  }, [selected]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow mb-6 space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-semibold">
        {selected ? "Update Expense ✏️" : "Add Expense ➕"}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="amount"
          placeholder="Amount"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={form.amount}
        />

        <input
          name="category"
          placeholder="Category (Food, Rent...)"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={form.category}
        />

        <input
          type="date"
          name="date"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={form.date}
        />

        <select
          name="paymentMethod"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={form.paymentMethod}
        >
          <option value="">Payment Method</option>
          <option>UPI</option>
          <option>Cash</option>
          <option>Card</option>
        </select>
      </div>

      <input
        name="notes"
        placeholder="Notes (optional)"
        className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        value={form.notes}
      />

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        {selected ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}
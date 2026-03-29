// "use client";

// import { useState } from "react";

// export default function BudgetForm({ onSubmit }: any) {
//   const [form, setForm] = useState({
//     category: "",
//     limit: "",
//     month: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
//       <input name="category" placeholder="Category" onChange={handleChange} className="border p-2 mb-2 w-full"/>
//       <input name="limit" placeholder="Limit" onChange={handleChange} className="border p-2 mb-2 w-full"/>
//       <input name="month" placeholder="YYYY-MM" onChange={handleChange} className="border p-2 mb-2 w-full"/>

//       <button className="bg-blue-600 text-white p-2">Set Budget</button>
//     </form>
//   );
// }
"use client";

import { useState } from "react";

export default function BudgetForm({ onSubmit }: any) {
  const [form, setForm] = useState({
    category: "",
    limit: "",
    month: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="bg-white p-6 rounded-xl shadow mb-6 space-y-4"
    >
      <h2 className="text-lg font-semibold">Set Budget 💰</h2>

      <div className="grid grid-cols-3 gap-4">
        <input
          name="category"
          placeholder="Category"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <input
          name="limit"
          placeholder="Limit (₹)"
          type="number"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <input
          type="month"
          name="month"
          className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Save Budget
      </button>
    </form>
  );
}
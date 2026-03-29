// "use client";

// export default function ExpenseFilters({ filters, setFilters }: any) {
//   return (
//     <div className="flex gap-2 mb-4">
//       <input
//         placeholder="Category"
//         className="border p-2"
//         onChange={(e) => setFilters({ ...filters, category: e.target.value })}
//       />

//       <input
//         type="date"
//         className="border p-2"
//         onChange={(e) => setFilters({ ...filters, date: e.target.value })}
//       />
//     </div>
//   );
// }

"use client";

export default function ExpenseFilters({ filters, setFilters }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 flex gap-4 items-center">

      <input
        placeholder="Search Category..."
        className="border p-2 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500"
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      />

      <input
        type="date"
        className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={filters.date}
        onChange={(e) =>
          setFilters({ ...filters, date: e.target.value })
        }
      />

      <button
        onClick={() => setFilters({ category: "", date: "" })}
        className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
      >
        Clear
      </button>

    </div>
  );
}
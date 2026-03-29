// "use client";

// export default function ExpenseList({ expenses, onEdit, onDelete }: any) {
//   return (
//     <div>
//       {expenses.map((exp: any) => (
//         <div key={exp._id} className="bg-white p-4 mb-2 rounded shadow flex justify-between">
//           <div>
//             <p className="font-bold">₹{exp.amount}</p>
//             <p>{exp.category}</p>
//             <p className="text-sm text-gray-500">{exp.paymentMethod}</p>
//           </div>

//           <div className="flex gap-2">
//             <button onClick={() => onEdit(exp)} className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
//             <button onClick={() => onDelete(exp._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

export default function ExpenseList({ expenses, onEdit, onDelete }: any) {
  if (!expenses.length) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No expenses found
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {expenses.map((exp: any) => (
        <div
          key={exp._id}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center hover:shadow-md transition"
        >
          {/* Left */}
          <div>
            <p className="font-bold text-lg text-blue-600">
              ₹{exp.amount}
            </p>
            <p className="text-gray-700">{exp.category}</p>
            <p className="text-sm text-gray-500">
              {exp.paymentMethod} • {exp.date?.slice(0, 10)}
            </p>

            {exp.notes && (
              <p className="text-xs text-gray-400 mt-1">
                {exp.notes}
              </p>
            )}
          </div>

          {/* Right */}
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(exp)}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(exp._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
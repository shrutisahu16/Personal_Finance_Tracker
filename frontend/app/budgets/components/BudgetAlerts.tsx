// export default function BudgetAlerts({ budgets }: any) {
//   return (
//     <div className="mt-4">
//       {budgets.map((b: any) => (
//         <div key={b._id} className="p-3 mb-2 border rounded">
//           <p>{b.category}: ₹{b.spent} / ₹{b.limit}</p>

//           {b.status === "warning" && <p className="text-yellow-600">⚠️ 80% reached</p>}
//           {b.status === "exceeded" && <p className="text-red-600">🔴 Budget exceeded</p>}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

export default function BudgetAlerts({ budgets }: any) {
  if (!budgets.length) {
    return (
      <p className="text-gray-500 text-center mt-6">
        No budgets set yet
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {budgets.map((b: any) => {
        // const percent = Math.min(
        //   ((b.spent / b.limit) * 100).toFixed(0),
        //   100
        // );
        const percent = b.limit
  ? Math.min(Math.round((b.spent / b.limit) * 100), 100)
  : 0;

        return (
          <div
            key={b._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            {/* Header */}
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-gray-700">
                {b.category}
              </h3>

              <p className="text-sm text-gray-500">
                ₹{b.spent} / ₹{b.limit}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div
                className={`h-3 rounded-full ${
                  b.status === "exceeded"
                    ? "bg-red-500"
                    : b.status === "warning"
                    ? "bg-yellow-400"
                    : "bg-green-500"
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>

            {/* Status */}
            <div className="mt-2 text-sm">
              {b.status === "safe" && (
                <span className="text-green-600">✅ Safe</span>
              )}

              {b.status === "warning" && (
                <span className="text-yellow-600">
                  ⚠️ 80% reached
                </span>
              )}

              {b.status === "exceeded" && (
                <span className="text-red-600">
                  🔴 Budget exceeded
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
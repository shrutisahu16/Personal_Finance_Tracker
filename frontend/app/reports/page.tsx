// "use client";

// import { useEffect, useState } from "react";
// import { getReportHistory } from "../../services/reportService";

// export default function ReportsPage() {
//   const [reports, setReports] = useState<any[]>([]);

//   useEffect(() => {
//     // getReportHistory().then(setReports);
//     getReportHistory().then((res) => {
//   setReports(res.reports || []);
// });
//   }, []);

//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-bold">Monthly Reports 📊</h1>

//       {/* Cards */}
//       <div className="grid grid-cols-3 gap-6">
//         {reports.map((r) => (
//           <div
//             key={r.id}
//             className="bg-white p-5 rounded-xl shadow"
//           >
//             <p className="text-gray-500 text-sm">{r.month}</p>

//             <h2 className="text-xl font-bold text-blue-600">
//               ₹{r.total_spent}
//             </h2>

//             <p className="text-sm text-gray-600">
//               Top: {r.top_category}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Empty */}
//       {!reports.length && (
//         <p className="text-gray-500">No reports available</p>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { getReportHistory } from "../../services/reportService";

export default function ReportsPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await getReportHistory();

        // ✅ Safe extraction
        // const data = Array.isArray(res)
        //   ? res
        //   : res?.reports || [];

        // // ✅ Sort latest first (important)
        // data.sort((a: any, b: any) =>
        //   b.month.localeCompare(a.month)
        // );

        // setReports(data);
        const data = Array.isArray(res)
  ? res
  : res?.reports || [];

// 🔥 sort latest first
const sorted = data.sort((a: any, b: any) =>
  b.month.localeCompare(a.month)
);

// 🔥 take only last 3 months
const last3 = sorted.slice(0, 3);

setReports(last3);
      } catch (error) {
        console.error("Report fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Monthly Reports 📊</h1>

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Data */}
      {!loading && reports.length > 0 && (
        <div className="grid grid-cols-3 gap-6">
          {/* {reports.map((r) => (
            <div
              key={r.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-gray-500 text-sm">{r.month}</p>

              <h2 className="text-xl font-bold text-blue-600">
                ₹{r.total_spent}
              </h2>

              <p className="text-sm text-gray-600">
                Top: {r.top_category || "-"}
              </p>
            </div>
          ))} */}
{reports.map((r, index) => {
  const prev =
    index < reports.length - 1 ? reports[index + 1] : null;

  let growth = 0;

  if (prev && prev.total_spent > 0) {
    growth =
      ((r.total_spent - prev.total_spent) /
        prev.total_spent) *
      100;
  }

  return (
    <div
      key={r.id}
      className="bg-white p-5 rounded-xl shadow space-y-2"
    >
      <p className="text-gray-500 text-sm">{r.month}</p>

      <h2 className="text-2xl font-bold text-blue-600">
        ₹{r.total_spent}
      </h2>

      <p className="text-sm text-gray-600">
        Top: {r.top_category || "-"}
      </p>

      {prev && (
        <p
          className={`text-sm font-semibold ${
            growth > 0 ? "text-red-500" : "text-green-600"
          }`}
        >
          {growth > 0 ? "↑" : "↓"}{" "}
          {Math.abs(growth).toFixed(1)}% vs last month
        </p>
      )}
    </div>
  );
})}        </div>
      )}

      {/* Empty */}
      {!loading && reports.length === 0 && (
        <p className="text-gray-500">No reports available</p>
      )}
    </div>
  );
}
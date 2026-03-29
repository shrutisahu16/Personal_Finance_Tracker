// "use client";

// import { useEffect, useState } from "react";
// import { getSuggestions } from "../../services/reportService";

// export default function SuggestionsPage() {
//   const [suggestions, setSuggestions] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getSuggestions();
//       setSuggestions(res.suggestions || []);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Smart Suggestions</h1>

//       {suggestions.length === 0 ? (
//         <p>No suggestions yet</p>
//       ) : (
//         suggestions.map((s, i) => (
//           <div key={i} className="bg-white p-4 mb-2 rounded shadow">
//             {s}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { getSuggestions } from "../../services/reportService";

// export default function SuggestionsPage() {
//   const [data, setData] = useState<any>([]);

//   // useEffect(() => {
//   //   getSuggestions().then(setData);
//   // }, []);
//   useEffect(() => {
//   getSuggestions().then((res) => {
//     setData(res || { suggestions: [] });
//   });
// }, []);

//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-bold">AI Suggestions 🤖</h1>

//       <div className="space-y-3">
//         {data?.suggestions?.length ? (
//           data.suggestions.map((s: string, i: number) => (
//             <div
//               key={i}
//               className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500"
//             >
//               {s}
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No suggestions available</p>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { getSuggestions } from "../../services/reportService";

export default function SuggestionsPage() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await getSuggestions();

        // ✅ Safe handling
        const data = res?.suggestions || [];

        setSuggestions(data);
      } catch (error) {
        console.error("Suggestions error:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">AI Suggestions 🤖</h1>

      {/* Loading */}
      {loading && <p className="text-gray-500">Analyzing your data...</p>}

      {/* Suggestions */}
      {!loading && suggestions.length > 0 && (
        <div className="space-y-3">
          {suggestions.map((s, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow border-l-4 border-blue-500 hover:shadow-md transition"
            >
              {s}
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && suggestions.length === 0 && (
        <p className="text-gray-500">
          No suggestions available (add more expenses)
        </p>
      )}
    </div>
  );
}
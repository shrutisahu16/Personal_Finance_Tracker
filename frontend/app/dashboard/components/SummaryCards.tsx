// export default function SummaryCards({ data }: any) {
//   return (
//     <div className="grid grid-cols-2 gap-4 mb-6">
//       <div className="bg-white p-4 shadow rounded">
//         <p>Total Spent</p>
//         <h2 className="text-xl font-bold">₹{data.totalSpent}</h2>
//       </div>

//       <div className="bg-white p-4 shadow rounded">
//         <p>Top Category</p>
//         <h2 className="text-xl font-bold">
//           {data.topCategory?.[0]}
//         </h2>
//       </div>
//     </div>
//   );
// }

export default function SummaryCards({ data }: any) {
  return (
    <div className="grid grid-cols-3 gap-6 mb-6">

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-500 text-sm">Total Spent</p>
        <h2 className="text-2xl font-bold text-blue-600">
          ₹{data?.totalSpent || 0}
        </h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-500 text-sm">Top Category</p>
        <h2 className="text-lg font-semibold">
          {data?.topCategory?.[0] || "-"}
        </h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-500 text-sm">Top Payment</p>
        <h2 className="text-lg font-semibold">
          {data?.topPayments?.[0]?.[0] || "-"}
        </h2>
      </div>

    </div>
  );
}
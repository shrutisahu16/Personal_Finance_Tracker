// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="bg-blue-600 text-white p-4 flex justify-between">
//       <h1 className="font-bold">Finance Tracker</h1>

//       <div className="flex gap-4">
//         <Link href="/dashboard">Dashboard</Link>
//         <Link href="/expenses">Expenses</Link>
//         <Link href="/budgets">Budgets</Link>
//         <Link href="/suggestions">AI</Link>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return (
    <div className="h-16 bg-white border-b flex justify-between items-center px-6 shadow-sm">
      
      <h2 className="text-lg font-semibold text-gray-800">
        Finance Dashboard
      </h2>

      <button 
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>

    </div>
  );
}
// "use client";

// import Link from "next/link";

// export default function Sidebar() {
//   return (
//     <div className="w-60 bg-gray-800 text-white h-screen p-4">
//       <h2 className="mb-4 font-bold">Menu</h2>

//       <div className="flex flex-col gap-3">
//         <Link href="/dashboard">Dashboard</Link>
//         <Link href="/expenses">Expenses</Link>
//         <Link href="/budgets">Budgets</Link>
//         <Link href="/suggestions">Suggestions</Link>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Expenses", path: "/expenses" },
  { name: "Budgets", path: "/budgets" },
  { name: "Suggestions", path: "/suggestions" },
  { name: "Reports", path: "/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r p-6 shadow-sm">
      
      <h1 className="text-2xl font-bold text-blue-600 mb-10">
        💰 Tracker
      </h1>

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`p-3 rounded-lg transition ${
              pathname === link.path
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
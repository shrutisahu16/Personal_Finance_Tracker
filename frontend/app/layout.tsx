// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import "./../styles/globals.css";

// export default function RootLayout({ children }: any) {
//   return (
//     <html>
//       <body>
//         <Navbar />
//         <div className="flex">
//           <Sidebar />
//           <div className="flex-1 p-4">{children}</div>
//         </div>
//       </body>
//     </html>
//   );
// }
// import "../styles/globals.css";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import ProtectedRoute from "../components/ProtectedRoute";

// export default function RootLayout({ children }: any) {
//       return (
//     <html>
//       <body>
//         <ProtectedRoute>
//           <div className="flex h-screen bg-gray-100">
            
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Right Side */}
//             <div className="flex flex-col flex-1">
              
//               {/* Navbar */}
//               <Navbar />

//               {/* Page Content */}
//               <main className="p-6 overflow-y-auto">
//                 {children}
//               </main>

//             </div>
//           </div>
//         </ProtectedRoute>
//       </body>
//     </html>
//   );
// }

"use client";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🔥 Check if auth page
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html>
      <body>
        {isAuthPage ? (
          // ✅ AUTH PAGES (NO NAVBAR/SIDEBAR)
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            {children}
          </div>
        ) : (
          // ✅ PROTECTED PAGES (WITH LAYOUT)
          <div className="flex h-screen bg-gray-100">
            
            {/* Sidebar */}
            <Sidebar />

            {/* Right */}
            <div className="flex flex-col flex-1">
              <Navbar />

              <main className="p-6 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
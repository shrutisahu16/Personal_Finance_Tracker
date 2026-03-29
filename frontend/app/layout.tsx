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
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProtectedRoute from "../components/ProtectedRoute";

export default function RootLayout({ children }: any) {
  return (
    <html>
      <body>
        <ProtectedRoute>
          <div className="flex h-screen bg-gray-100">
            
            {/* Sidebar */}
            <Sidebar />

            {/* Right Side */}
            <div className="flex flex-col flex-1">
              
              {/* Navbar */}
              <Navbar />

              {/* Page Content */}
              <main className="p-6 overflow-y-auto">
                {children}
              </main>

            </div>
          </div>
        </ProtectedRoute>
      </body>
    </html>
  );
}

// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function ProtectedRoute({ children }: any) {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.push("/auth/login");
//     }
//   }, []);

//   return children;
// }
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname.startsWith("/auth")) {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [pathname]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 border-t-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return children;
}
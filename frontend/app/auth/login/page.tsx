// "use client";

// import { useState } from "react";
// import { loginUser } from "../../../services/authService";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     const res = await loginUser(form);

//     if (res.token) {
//       localStorage.setItem("token", res.token);
//       router.push("/dashboard");
//     } else {
//       alert(res.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="w-full mb-4 p-3 border rounded-lg"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="w-full mb-4 p-3 border rounded-lg"
//           onChange={handleChange}
//         />

//         <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { loginUser } from "../../../services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await loginUser(form);

    if (res.token) {
      localStorage.setItem("token", res.token);
      router.push("/dashboard");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to manage your finances
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={handleChange}
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center mt-5 text-gray-600">
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-blue-600 font-semibold">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}
// "use client";

// import { useState } from "react";
// import { signupUser } from "../../../services/authService";
// import { useRouter } from "next/navigation";

// export default function SignupPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     const res = await signupUser(form);

//     if (res.user) {
//       alert("Signup successful");
//       router.push("/auth/login");
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
//         <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           className="w-full mb-4 p-3 border rounded-lg"
//           onChange={handleChange}
//         />

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

//         <button className="w-full bg-green-600 text-white p-3 rounded-lg">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { signupUser } from "../../../services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await signupUser(form);

    if (res.user) {
      alert("Signup successful");
      router.push("/auth/login");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-green-600 mb-2">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Start tracking your expenses today
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            onChange={handleChange}
          />

          <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
            Signup
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
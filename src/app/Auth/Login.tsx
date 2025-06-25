"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useInitialName from "../Hooks/initialName";
import useLogIn from "../Hooks/isLoggedIn";
import Link from "next/link";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const spreadedEmail = [...email];
  const { newInitialName } = useInitialName();
  const { isLoggedIn } = useLogIn();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      isLoggedIn(true);
      newInitialName(spreadedEmail[0].toUpperCase());
      if (email?.includes("admin")) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-700">Welcome Back</h1>
          <p className="text-sm text-gray-500">Please login to your account</p>
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import useInitialName from "../Hooks/initialName";
import useLogIn from "../Hooks/isLoggedIn";
export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const spreadedEmail = [...email];
    const { newInitialName } = useInitialName();
    const { isLoggedIn,LoggedIn } = useLogIn();
  const handleLogin = async (e) => {
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
console.log(LoggedIn)
      if (email?.includes("admin")) {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
      // Redirect to dashboard on success
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
        <p className="text-sm text-gray-500">Enter login details to access</p>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
          <input
            type="email"
            className="border-2 w-full h-10 p-2 rounded-lg border-gray-300"
            placeholder="Enter Your Email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="border-2 w-full h-10 p-2 rounded-lg border-gray-300"
            placeholder="Enter Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

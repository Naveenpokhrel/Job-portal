"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleAuth = (e) => {
    e.preventDefault();
    setError("");

    // Dummy authentication simulation (no Firebase)
    if (email && password) {
      router.push("/dashboard");
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-green-600">
            {isSignUp ? "Create Account" : "Sign in to Account"}
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleAuth}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="text-center mt-4">
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-green-600 cursor-pointer ml-1"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
        <div className="w-1/2 bg-green-600 text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold">Hello, Friend!</h2>
          <p className="mt-2">
            Fill up personal information and start journey with us.
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="mt-4 border-2 border-white py-2 px-6 rounded hover:bg-white hover:text-green-600"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}

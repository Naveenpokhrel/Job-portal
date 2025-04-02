"use client";
import { useSession, signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Settingss() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login"); // Redirect if not logged in
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold">
          We are Welcome, {session?.user?.email}!
        </h1>
        <p className="text-sm text-gray-500">You are logged in.</p>
        <button
          onClick={() => router.push("/")} // Redirects to home page on sign out
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

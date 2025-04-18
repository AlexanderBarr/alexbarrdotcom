"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ App Router version

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // ✅ correct usage for App Router

  const handleLogin = async () => {
    console.log('h')
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      console.log('correct')
      router.push("/"); // ✅ redirect after login
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="rounded-xl bg-white p-8 shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">🔒 Enter Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white rounded-lg p-2 hover:bg-gray-800"
        >
          Login
        </button>
      </div>
    </div>
  );
}

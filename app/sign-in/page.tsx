"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    // ❌ res.error = login gagal
    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    // ✔ login sukses
    router.push("/home");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-96 space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Sign In</h1>

        {error && <p className="text-red-500 text-center text-sm">{error}</p>}

        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 bg-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="text-sm">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 bg-black"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
          Sign In
        </button>
      </form>
    </div>
  );
}

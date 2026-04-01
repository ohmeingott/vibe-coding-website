"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brutal-yellow flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-2">
            VIBE CODING
          </h1>
          <div className="inline-block bg-brutal-pink px-4 py-1 brutal-border brutal-shadow">
            <span className="font-heading text-2xl font-bold">WORKSHOP</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="bg-brutal-white brutal-border brutal-shadow-lg p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">
              Enter the Workshop
            </h2>

            <div className="space-y-4">
              <div>
                <label className="font-heading font-bold text-sm block mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full brutal-border p-3 font-body text-lg bg-brutal-white focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_var(--color-brutal-blue)]"
                  autoFocus
                />
              </div>

              <div>
                <label className="font-heading font-bold text-sm block mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full brutal-border p-3 font-body text-lg bg-brutal-white focus:outline-none focus:ring-0 focus:shadow-[4px_4px_0px_var(--color-brutal-blue)]"
                />
              </div>

              {error && (
                <div className="bg-brutal-red brutal-border p-3 text-center">
                  <span className="font-heading font-bold text-sm">
                    Wrong credentials. Try again!
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brutal-black text-brutal-white font-heading font-bold text-lg p-4 brutal-border brutal-shadow brutal-hover disabled:opacity-50"
              >
                {loading ? "Entering..." : "Let's Go! ⚡"}
              </button>
            </div>
          </div>
        </form>

        <p className="text-center font-body text-sm mt-6 opacity-60">
          Ask your workshop host for the credentials.
        </p>
      </div>
    </div>
  );
}

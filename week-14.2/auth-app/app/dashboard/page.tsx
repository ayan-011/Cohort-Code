"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (!data.user) {
          router.replace("/signin");
          return;
        }
        setUser(data.user);
        setLoading(false);
      });
  }, [router]);

  async function handleSignOut() {
    setSigningOut(true);
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/signin");
    router.refresh();
  }

  if (loading) {
    return (
      <div className="card">
        <p className="spinner">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  const initial = user.name.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="card dashboard-card">
      <div className="avatar">{initial}</div>
      <h1>Welcome, {user.name}!</h1>
      <p className="subtitle">You are signed in.</p>

      <div className="user-row">
        <span className="label">Name</span>
        <span>{user.name}</span>
      </div>
      <div className="user-row">
        <span className="label">Email</span>
        <span>{user.email}</span>
      </div>
      <div className="user-row">
        <span className="label">User ID</span>
        <span>{user.id}</span>
      </div>

      <div style={{ marginTop: 24 }}>
        <button
          className="btn btn-secondary"
          onClick={handleSignOut}
          disabled={signingOut}
        >
          {signingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    </div>
  );
}

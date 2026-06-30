"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        router.replace(data.user ? "/dashboard" : "/signin");
      });
  }, [router]);

  return (
    <div className="card">
      <p className="spinner">Loading...</p>
    </div>
  );
}

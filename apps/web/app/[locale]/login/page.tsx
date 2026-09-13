"use client";

import { useState } from "react";
import { Button } from "@xcarbox/ui";

export default function LoginPage() {
  const [email, setEmail] = useState("demo@xcarbox.com");
  const [password, setPassword] = useState("123456");
  const [status, setStatus] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("جاري التحقق...");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus(`تم تسجيل الدخول بنجاح! مرحباً ${data.user?.fullName}`);
    } else {
      setStatus(`خطأ: ${data.message}`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", direction: "rtl" }}>
      <h2>تسجيل الدخول - XCarBox</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "320px" }}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">تسجيل الدخول</Button>
      </form>
      {status && <p style={{ marginTop: "1rem", color: status.includes("بنجاح") ? "green" : "red" }}>{status}</p>}
    </div>
  );
}
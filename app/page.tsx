"use client"

import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    window.location.replace("/sick-leaves.html")
  }, [])

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0d9488, #0f172a)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        padding: 20,
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <div style={{ fontSize: 64, marginBottom: 12 }}>⚕</div>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>نظام إدارة الإجازات المرضية</h1>
        <p style={{ opacity: 0.85, marginBottom: 24 }}>جاري تحميل النظام الاحترافي...</p>
        <a
          href="/sick-leaves.html"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            background: "white",
            color: "#0d9488",
            borderRadius: 10,
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          فتح النظام الآن
        </a>
      </div>
    </main>
  )
}

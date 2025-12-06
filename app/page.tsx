"use client"

import { useState } from "react"
import { LoginWithOTP } from "@/components/login-with-otp"
import { AppLayout } from "@/components/app-layout"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background">
        <LoginWithOTP onLoginSuccess={() => setIsAuthenticated(true)} />
      </main>
    )
  }

  return <AppLayout />
}

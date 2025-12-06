"use client"

import { useState } from "react"
import { PhoneInput } from "./phone-input"
import { OTPVerification } from "./otp-verification"
import { Dumbbell, Flame, Zap } from "lucide-react"

interface LoginWithOTPProps {
  onLoginSuccess: () => void
}

export function LoginWithOTP({ onLoginSuccess }: LoginWithOTPProps) {
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone)
    setStep("otp")
  }

  const handleBack = () => {
    setStep("phone")
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Branding & Image */}
      <div className="relative lg:w-1/2 bg-background overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/muscular-athlete-workout-dark-gym-dramatic-lightin.jpg')`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-12 min-h-[40vh] lg:min-h-screen">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Dumbbell className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">APEX</h1>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Fitness Club</p>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-6 py-8 lg:py-0">
            <p className="text-sm tracking-[0.25em] text-primary uppercase font-medium">Member Portal</p>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Unleash Your
              <br />
              <span className="text-primary">Potential</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Access your exclusive member dashboard, track progress, and book premium classes.
            </p>
          </div>

          {/* Stats - Hidden on mobile */}
          <div className="hidden lg:flex gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Flame className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Members</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">200+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Classes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-card">
        <div className="w-full max-w-md">
          {step === "phone" ? (
            <PhoneInput onSubmit={handlePhoneSubmit} />
          ) : (
            <OTPVerification phoneNumber={phoneNumber} onBack={handleBack} onSuccess={onLoginSuccess} />
          )}
        </div>
      </div>
    </div>
  )
}

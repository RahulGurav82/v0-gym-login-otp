"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, RefreshCw } from "lucide-react"

interface OTPVerificationProps {
  phoneNumber: string
  onBack: () => void
  onSuccess: () => void
}

export function OTPVerification({ phoneNumber, onBack, onSuccess }: OTPVerificationProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [resendTimer])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    const newOtp = [...otp]
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char
    })
    setOtp(newOtp)
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.join("").length < 6) return

    setIsLoading(true)
    // Simulate API verification
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsVerified(true)
    setTimeout(() => {
      onSuccess()
    }, 2000)
  }

  const handleResend = () => {
    setResendTimer(30)
    // Resend OTP logic here
  }

  const maskPhoneNumber = (phone: string) => {
    if (phone.length <= 4) return phone
    return `${phone.slice(0, -4).replace(/\d/g, "•")}${phone.slice(-4)}`
  }

  if (isVerified) {
    return (
      <div className="space-y-8 text-center">
        <div className="space-y-4">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto animate-in zoom-in duration-300">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-card-foreground">Welcome Back!</h2>
          <p className="text-muted-foreground">
            Your account has been verified successfully.
            <br />
            Redirecting to your dashboard...
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-card-foreground transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back</span>
        </button>
        <h2 className="text-3xl font-bold text-card-foreground">Verify OTP</h2>
        <p className="text-muted-foreground">
          We&apos;ve sent a 6-digit code to{" "}
          <span className="text-card-foreground font-medium">{maskPhoneNumber(phoneNumber)}</span>
        </p>
      </div>

      {/* OTP Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center gap-3" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold rounded-xl bg-input border-2 border-border text-card-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                aria-label={`OTP digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Resend Timer */}
          <div className="text-center">
            {resendTimer > 0 ? (
              <p className="text-sm text-muted-foreground">
                Resend code in <span className="text-primary font-semibold">{resendTimer}s</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Resend Code
              </button>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={otp.join("").length < 6 || isLoading}
          className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              <span>Verifying...</span>
            </div>
          ) : (
            "Verify & Login"
          )}
        </Button>
      </form>

      {/* Help */}
      <div className="p-4 rounded-xl bg-secondary/50 border border-border">
        <p className="text-sm text-muted-foreground text-center">
          Didn&apos;t receive the code?{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Star,
  CheckCircle,
  XCircle,
  Clock,
  User,
  ChevronRight,
  ArrowLeft,
  Dumbbell,
  Calendar,
  AlertCircle,
} from "lucide-react"

type PTPackage = {
  id: string
  trainerName: string
  trainerImage?: string
  packageName: string
  totalSessions: number
  sessionsLeft: number
  completedSessions: number
  bookedSessions: number
  startDate: string
  endDate: string
  status: "active" | "expired"
}

type PTSession = {
  id: string
  packageId: string
  trainerName: string
  date: string
  time: string
  status: "pending" | "approved" | "rejected" | "completed"
  hasReview: boolean
}

export function PTPage() {
  const [packages] = useState<PTPackage[]>([
    {
      id: "pkg1",
      trainerName: "Mike Johnson",
      packageName: "Premium PT Package",
      totalSessions: 20,
      sessionsLeft: 8,
      completedSessions: 10,
      bookedSessions: 2,
      startDate: "Nov 1, 2024",
      endDate: "Feb 28, 2025",
      status: "active",
    },
    {
      id: "pkg2",
      trainerName: "Sarah Williams",
      packageName: "Starter PT Package",
      totalSessions: 10,
      sessionsLeft: 0,
      completedSessions: 10,
      bookedSessions: 0,
      startDate: "Aug 1, 2024",
      endDate: "Oct 31, 2024",
      status: "expired",
    },
  ])

  const [sessions, setSessions] = useState<PTSession[]>([
    {
      id: "1",
      packageId: "pkg1",
      trainerName: "Mike Johnson",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      status: "pending",
      hasReview: false,
    },
    {
      id: "2",
      packageId: "pkg1",
      trainerName: "Mike Johnson",
      date: "Dec 12, 2024",
      time: "3:00 PM",
      status: "completed",
      hasReview: false,
    },
    {
      id: "3",
      packageId: "pkg1",
      trainerName: "Mike Johnson",
      date: "Dec 8, 2024",
      time: "10:00 AM",
      status: "completed",
      hasReview: true,
    },
    {
      id: "4",
      packageId: "pkg1",
      trainerName: "Mike Johnson",
      date: "Dec 5, 2024",
      time: "10:00 AM",
      status: "approved",
      hasReview: false,
    },
  ])

  const [selectedPackage, setSelectedPackage] = useState<PTPackage | null>(null)
  const [reviewingSession, setReviewingSession] = useState<string | null>(null)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  const activePackages = packages.filter((p) => p.status === "active")
  const expiredPackages = packages.filter((p) => p.status === "expired")

  const handleApprove = (id: string) => {
    setSessions(sessions.map((s) => (s.id === id ? { ...s, status: "approved" as const } : s)))
  }

  const handleReject = (id: string) => {
    setSessions(sessions.map((s) => (s.id === id ? { ...s, status: "rejected" as const } : s)))
  }

  const handleSubmitReview = (id: string) => {
    setSessions(sessions.map((s) => (s.id === id ? { ...s, hasReview: true } : s)))
    setReviewingSession(null)
    setRating(0)
    setReview("")
  }

  if (selectedPackage) {
    const packageSessions = sessions.filter((s) => s.packageId === selectedPackage.id)

    return (
      <div className="p-4 md:p-8 space-y-6">
        {/* Back Button */}
        <Button variant="ghost" onClick={() => setSelectedPackage(null)} className="gap-2 -ml-2">
          <ArrowLeft className="w-4 h-4" />
          Back to PT Packages
        </Button>

        {/* Package Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Dumbbell className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{selectedPackage.packageName}</h1>
              <p className="text-muted-foreground">Trainer: {selectedPackage.trainerName}</p>
            </div>
          </div>
        </div>

        {/* Session Stats */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Your Sessions</h3>
            <span className="text-3xl font-bold text-primary">{selectedPackage.totalSessions}</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 rounded-lg bg-background/50">
              <p className="text-2xl font-bold text-primary">{selectedPackage.sessionsLeft}</p>
              <p className="text-xs text-muted-foreground">Sessions Left</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/50">
              <p className="text-2xl font-bold text-green-500">{selectedPackage.completedSessions}</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-background/50">
              <p className="text-2xl font-bold text-blue-500">{selectedPackage.bookedSessions}</p>
              <p className="text-xs text-muted-foreground">Total Booked</p>
            </div>
          </div>
        </Card>

        {/* Validity */}
        <Card className="p-4 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Package Validity</p>
            <p className="text-xs text-muted-foreground">
              {selectedPackage.startDate} - {selectedPackage.endDate}
            </p>
          </div>
        </Card>

        {/* Sessions List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Session History</h3>

          {packageSessions.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No sessions booked yet</p>
            </Card>
          ) : (
            packageSessions.map((session) => (
              <Card key={session.id} className="p-5">
                <div className="space-y-4">
                  {/* Session Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{session.trainerName}</h4>
                        <p className="text-sm text-muted-foreground">
                          {session.date} at {session.time}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        session.status === "approved"
                          ? "default"
                          : session.status === "rejected"
                            ? "destructive"
                            : session.status === "completed"
                              ? "secondary"
                              : "outline"
                      }
                    >
                      {session.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                      {session.status === "approved" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {session.status === "rejected" && <XCircle className="w-3 h-3 mr-1" />}
                      {session.status.toUpperCase()}
                    </Badge>
                  </div>

                  {/* Pending Actions */}
                  {session.status === "pending" && (
                    <div className="flex gap-3 pt-2">
                      <Button onClick={() => handleApprove(session.id)} className="flex-1" size="sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        onClick={() => handleReject(session.id)}
                        variant="destructive"
                        className="flex-1"
                        size="sm"
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  )}

                  {/* Completed - Review Option */}
                  {session.status === "completed" && !session.hasReview && reviewingSession !== session.id && (
                    <Button onClick={() => setReviewingSession(session.id)} className="w-full" size="sm">
                      Leave Review & Rating
                    </Button>
                  )}

                  {/* Review Form */}
                  {reviewingSession === session.id && (
                    <div className="space-y-4 pt-2 border-t border-border">
                      <div>
                        <p className="text-sm font-medium mb-2">Rate this session</p>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setRating(star)}
                              className="transition-all hover:scale-110"
                            >
                              <Star
                                className={`w-8 h-8 ${
                                  star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Your feedback</p>
                        <Textarea
                          placeholder="Share your experience with this session..."
                          value={review}
                          onChange={(e) => setReview(e.target.value)}
                          rows={3}
                        />
                      </div>
                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleSubmitReview(session.id)}
                          className="flex-1"
                          disabled={rating === 0}
                        >
                          Submit Review
                        </Button>
                        <Button
                          onClick={() => {
                            setReviewingSession(null)
                            setRating(0)
                            setReview("")
                          }}
                          variant="outline"
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Has Review */}
                  {session.hasReview && (
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <p className="text-sm text-muted-foreground">Review submitted</p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Personal Training</h1>
        <p className="text-muted-foreground">Manage your PT packages and sessions</p>
      </div>

      {/* Active PT Packages */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Active PT
        </h3>

        {activePackages.length === 0 ? (
          <Card className="p-8 text-center">
            <Dumbbell className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground">No active PT packages</p>
            <Button className="mt-4">Browse Packages</Button>
          </Card>
        ) : (
          activePackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="p-5 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <Dumbbell className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{pkg.packageName}</h4>
                    <p className="text-sm text-muted-foreground">Trainer: {pkg.trainerName}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-primary font-medium">{pkg.sessionsLeft} sessions left</span>
                      <span className="text-xs text-muted-foreground">Expires: {pkg.endDate}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span>
                    {pkg.completedSessions}/{pkg.totalSessions} completed
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${(pkg.completedSessions / pkg.totalSessions) * 100}%` }}
                  />
                </div>
              </div>
              <Button className="w-full mt-4" size="sm">
                View Sub Session
              </Button>
            </Card>
          ))
        )}
      </div>

      {/* Expired PT Packages */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-muted-foreground"></span>
          Expired PT
        </h3>

        {expiredPackages.length === 0 ? (
          <Card className="p-6 text-center">
            <p className="text-sm text-muted-foreground">No expired packages</p>
          </Card>
        ) : (
          expiredPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="p-5 opacity-70 cursor-pointer hover:opacity-100 transition-opacity"
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                    <Dumbbell className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold">{pkg.packageName}</h4>
                      <Badge variant="secondary" className="text-xs">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Expired
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Trainer: {pkg.trainerName}</p>
                    <p className="text-xs text-muted-foreground mt-1">Ended: {pkg.endDate}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
              {/* Completion Summary */}
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sessions Completed</span>
                  <span className="font-medium">
                    {pkg.completedSessions}/{pkg.totalSessions}
                  </span>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Star, CheckCircle, XCircle, Clock, User } from "lucide-react"

type PTSession = {
  id: string
  trainerName: string
  date: string
  time: string
  status: "pending" | "approved" | "rejected" | "completed"
  hasReview: boolean
}

export function PTPage() {
  const [sessions, setSessions] = useState<PTSession[]>([
    {
      id: "1",
      trainerName: "Mike Johnson",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      status: "pending",
      hasReview: false,
    },
    {
      id: "2",
      trainerName: "Sarah Williams",
      date: "Dec 12, 2024",
      time: "3:00 PM",
      status: "completed",
      hasReview: false,
    },
    {
      id: "3",
      trainerName: "Mike Johnson",
      date: "Dec 8, 2024",
      time: "10:00 AM",
      status: "completed",
      hasReview: true,
    },
  ])

  const [reviewingSession, setReviewingSession] = useState<string | null>(null)
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

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

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Personal Training</h1>
        <p className="text-muted-foreground">Manage your PT sessions and provide feedback</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <p className="text-2xl font-bold">8</p>
          <p className="text-xs text-muted-foreground">Sessions Left</p>
        </Card>
        <Card className="p-4">
          <p className="text-2xl font-bold">12</p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </Card>
        <Card className="p-4">
          <p className="text-2xl font-bold">20</p>
          <p className="text-xs text-muted-foreground">Total Booked</p>
        </Card>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Your Sessions</h3>

        {sessions.map((session) => (
          <Card key={session.id} className="p-6">
            <div className="space-y-4">
              {/* Session Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">{session.trainerName}</h4>
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
                  <Button onClick={() => handleReject(session.id)} variant="destructive" className="flex-1" size="sm">
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
                        <button key={star} onClick={() => setRating(star)} className="transition-all hover:scale-110">
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
                    <Button onClick={() => handleSubmitReview(session.id)} className="flex-1" disabled={rating === 0}>
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
        ))}
      </div>
    </div>
  )
}

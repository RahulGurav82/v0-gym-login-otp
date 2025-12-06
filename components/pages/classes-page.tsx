"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, TrendingUp, Heart } from "lucide-react"

type GymClass = {
  id: string
  name: string
  instructor: string
  time: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  spotsLeft: number
  totalSpots: number
  isJoined: boolean
}

export function ClassesPage() {
  const [classes, setClasses] = useState<GymClass[]>([
    {
      id: "1",
      name: "HIIT Training",
      instructor: "Alex Thompson",
      time: "Tomorrow at 6:00 AM",
      duration: "45 min",
      difficulty: "Advanced",
      spotsLeft: 3,
      totalSpots: 20,
      isJoined: false,
    },
    {
      id: "2",
      name: "Yoga Flow",
      instructor: "Emma Wilson",
      time: "Tomorrow at 9:00 AM",
      duration: "60 min",
      difficulty: "Beginner",
      spotsLeft: 8,
      totalSpots: 15,
      isJoined: true,
    },
    {
      id: "3",
      name: "Strength & Conditioning",
      instructor: "Mike Johnson",
      time: "Tomorrow at 5:00 PM",
      duration: "50 min",
      difficulty: "Intermediate",
      spotsLeft: 5,
      totalSpots: 18,
      isJoined: false,
    },
    {
      id: "4",
      name: "Spin Class",
      instructor: "Sarah Lee",
      time: "Tomorrow at 7:00 PM",
      duration: "45 min",
      difficulty: "Intermediate",
      spotsLeft: 2,
      totalSpots: 25,
      isJoined: true,
    },
  ])

  const handleJoinClass = (id: string) => {
    setClasses(
      classes.map((c) =>
        c.id === id
          ? {
              ...c,
              isJoined: true,
              spotsLeft: c.spotsLeft - 1,
            }
          : c,
      ),
    )
  }

  const handleLeaveClass = (id: string) => {
    setClasses(
      classes.map((c) =>
        c.id === id
          ? {
              ...c,
              isJoined: false,
              spotsLeft: c.spotsLeft + 1,
            }
          : c,
      ),
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "Intermediate":
        return "bg-primary/10 text-primary border-primary/20"
      case "Advanced":
        return "bg-destructive/10 text-destructive border-destructive/20"
      default:
        return "bg-secondary"
    }
  }

  const myClasses = classes.filter((c) => c.isJoined)
  const availableClasses = classes.filter((c) => !c.isJoined)

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Classes</h1>
        <p className="text-muted-foreground">Join or leave classes anytime</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{myClasses.length}</p>
              <p className="text-xs text-muted-foreground">Joined</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-xs text-muted-foreground">This Month</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">156</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">8</p>
              <p className="text-xs text-muted-foreground">Favorites</p>
            </div>
          </div>
        </Card>
      </div>

      {/* My Classes */}
      {myClasses.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold">My Classes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {myClasses.map((gymClass) => (
              <Card key={gymClass.id} className="p-6 border-primary/50">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-lg">{gymClass.name}</h4>
                      <p className="text-sm text-muted-foreground">{gymClass.instructor}</p>
                    </div>
                    <Badge className={getDifficultyColor(gymClass.difficulty)} variant="outline">
                      {gymClass.difficulty}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>
                        {gymClass.time} • {gymClass.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>
                        {gymClass.spotsLeft} spots left of {gymClass.totalSpots}
                      </span>
                    </div>
                  </div>

                  <Button onClick={() => handleLeaveClass(gymClass.id)} variant="outline" className="w-full">
                    Leave Class
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Available Classes */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Available Classes</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {availableClasses.map((gymClass) => (
            <Card key={gymClass.id} className="p-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{gymClass.name}</h4>
                    <p className="text-sm text-muted-foreground">{gymClass.instructor}</p>
                  </div>
                  <Badge className={getDifficultyColor(gymClass.difficulty)} variant="outline">
                    {gymClass.difficulty}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>
                      {gymClass.time} • {gymClass.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>
                      {gymClass.spotsLeft} spots left of {gymClass.totalSpots}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => handleJoinClass(gymClass.id)}
                  className="w-full"
                  disabled={gymClass.spotsLeft === 0}
                >
                  {gymClass.spotsLeft === 0 ? "Class Full" : "Join Class"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

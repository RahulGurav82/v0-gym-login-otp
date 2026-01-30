"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Dumbbell,
  Flame,
  Droplets,
  Wind,
  Calendar,
  TrendingUp,
  Clock,
  Star,
  ChevronRight,
  Trophy,
  Target,
  Zap,
  ArrowRight,
} from "lucide-react"
import { useNavigation } from "@/components/app-layout"

export function HomePage() {
  const { navigateTo } = useNavigation()

  return (
    <div className="min-h-full">
      {/* Hero Section with Brand */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Dumbbell className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ELITE FITNESS</h1>
              <p className="text-xs text-muted-foreground">Premium Member Portal</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-balance">
              Welcome Back, <span className="text-primary">John</span>
            </h2>
            <p className="text-lg text-muted-foreground">Your journey to greatness continues today.</p>
          </div>

          {/* Membership Status Card */}
          <Card className="backdrop-blur-sm bg-card/80 border-primary/20 shadow-lg">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-3 bg-primary/20 text-primary hover:bg-primary/30 border-primary/30">
                    ACTIVE MEMBERSHIP
                  </Badge>
                  <h3 className="text-2xl font-bold mb-1">Premium Elite</h3>
                  <p className="text-sm text-muted-foreground">All-Access Pass</p>
                </div>
                <div className="text-right">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Member Since</p>
                  <p className="font-bold">Jan 2024</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Expires On</p>
                  <p className="font-bold">Dec 31, 2025</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Member ID</p>
                  <p className="font-bold">#EF2024</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        {/* Performance Stats */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Your Performance</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View Details <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-5 hover:shadow-lg transition-shadow border-primary/10">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold">24</p>
                  <p className="text-sm text-muted-foreground">Workouts</p>
                  <p className="text-xs text-primary mt-1">+8 this week</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow border-primary/10">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold">36h</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                  <p className="text-xs text-primary mt-1">+12h from last</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow border-primary/10">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                  <p className="text-xs text-primary mt-1">Keep going!</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow border-primary/10">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold">850</p>
                  <p className="text-sm text-muted-foreground">XP Points</p>
                  <p className="text-xs text-primary mt-1">Level 8</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Goals Progress */}
        <Card className="p-6 border-primary/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold">Monthly Goal Progress</h4>
                <p className="text-sm text-muted-foreground">20 workouts target</p>
              </div>
            </div>
            <span className="text-2xl font-bold text-primary">24/20</span>
          </div>
          <Progress value={120} className="h-3 mb-2" />
          <p className="text-xs text-muted-foreground">Outstanding! You've exceeded your goal by 4 workouts!</p>
        </Card>

        {/* Personal Training */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Personal Training</h3>
            <Button variant="ghost" size="sm" className="text-primary" onClick={() => navigateTo("pt")}>
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <Card
            className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group border-primary/10"
            onClick={() => navigateTo("pt")}
          >
            <div className="relative h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <Dumbbell className="w-16 h-16 text-primary/30 absolute" />
              <div className="relative z-10 flex items-center gap-2">
                <Zap className="w-8 h-8 text-primary" />
                <span className="text-3xl font-bold">PT SESSIONS</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-lg mb-1">Active Package</h4>
                  <p className="text-sm text-muted-foreground">1-on-1 with Expert Trainers</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">8</p>
                  <p className="text-xs text-muted-foreground">Sessions Left</p>
                </div>
              </div>
              <Button className="w-full group-hover:bg-primary/90" size="lg">
                Manage Sessions <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Premium Amenities */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Premium Amenities</h3>
            <Button variant="ghost" size="sm" className="text-primary" onClick={() => navigateTo("appointments")}>
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden border-primary/10"
              onClick={() => navigateTo("appointments")}
            >
              <div className="relative h-24 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                <Flame className="w-12 h-12 text-red-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg mb-2">Sauna Sessions</h4>
                <p className="text-sm text-muted-foreground mb-4">Relax and detoxify in our premium sauna facilities</p>
                <Button className="w-full bg-transparent" variant="outline" size="sm">
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            <Card
              className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden border-primary/10"
              onClick={() => navigateTo("appointments")}
            >
              <div className="relative h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Droplets className="w-12 h-12 text-blue-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg mb-2">Ice Bath Therapy</h4>
                <p className="text-sm text-muted-foreground mb-4">Recovery and rejuvenation through cold therapy</p>
                <Button className="w-full bg-transparent" variant="outline" size="sm">
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            <Card
              className="group hover:shadow-xl transition-all cursor-pointer overflow-hidden border-primary/10"
              onClick={() => navigateTo("appointments")}
            >
              <div className="relative h-24 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                <Wind className="w-12 h-12 text-cyan-500" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-lg mb-2">Steam Room</h4>
                <p className="text-sm text-muted-foreground mb-4">Soothe your muscles and improve circulation</p>
                <Button className="w-full bg-transparent" variant="outline" size="sm">
                  Book Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Upcoming Schedule</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              View Calendar <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="space-y-3">
            <Card className="p-5 hover:shadow-lg transition-shadow border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Dumbbell className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">PT Session with Mike Johnson</h4>
                  <p className="text-sm text-muted-foreground">Tomorrow at 10:00 AM • 60 minutes</p>
                </div>
                <Button size="sm" onClick={() => navigateTo("pt")}>
                  View
                </Button>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-7 h-7 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">Sauna Appointment</h4>
                  <p className="text-sm text-muted-foreground">Dec 10 at 6:00 PM • 30 minutes</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => navigateTo("appointments")}>
                  Manage
                </Button>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1">Spin Class - Advanced</h4>
                  <p className="text-sm text-muted-foreground">Dec 11 at 7:30 AM • 45 minutes</p>
                </div>
                <Button size="sm" variant="outline" onClick={() => navigateTo("classes")}>
                  Details
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Motivational CTA */}
        <Card className="relative overflow-hidden border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div className="relative p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">You're On Fire!</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              You've surpassed your monthly goal. Keep up the amazing work and continue pushing your limits!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Achievements <Star className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

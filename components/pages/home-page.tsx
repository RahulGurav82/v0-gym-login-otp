"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Flame, Droplets, Wind, Calendar, TrendingUp, Clock, Star } from "lucide-react"

export function HomePage() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome Back, John!</h1>
        <p className="text-muted-foreground">Your fitness journey continues</p>
      </div>

      {/* Membership Card */}
      <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Membership Status</p>
            <h2 className="text-2xl font-bold">Premium Elite</h2>
          </div>
          <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
            <span className="text-xs font-semibold text-primary">ACTIVE</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Member Since</p>
            <p className="font-semibold">Jan 2024</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Expires On</p>
            <p className="font-semibold">Dec 31, 2025</p>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-xs text-muted-foreground">Workouts</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">36h</p>
              <p className="text-xs text-muted-foreground">This Month</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-muted-foreground">Streak Days</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">850</p>
              <p className="text-xs text-muted-foreground">XP Points</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Premium Amenities */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Premium Amenities</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {/* PT Card */}
          <Card className="p-6 hover:border-primary/50 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Personal Training</h4>
                  <p className="text-sm text-muted-foreground">1-on-1 Sessions</p>
                </div>
              </div>
              <div className="px-2 py-1 rounded-lg bg-primary/20 text-primary text-xs font-semibold">8 Left</div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Professional trainers to help you achieve your fitness goals
            </p>
            <Button className="w-full">View Sessions</Button>
          </Card>

          {/* Sauna Card */}
          <Card className="p-6 hover:border-primary/50 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Sauna</h4>
                  <p className="text-sm text-muted-foreground">Relaxation & Recovery</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Book your slot for ultimate relaxation and muscle recovery
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Book Appointment
            </Button>
          </Card>

          {/* Ice Bath Card */}
          <Card className="p-6 hover:border-primary/50 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ice Bath</h4>
                  <p className="text-sm text-muted-foreground">Cold Therapy</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Boost recovery and reduce inflammation with cold therapy
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Book Appointment
            </Button>
          </Card>

          {/* Steam Room Card */}
          <Card className="p-6 hover:border-primary/50 transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <Wind className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Steam Room</h4>
                  <p className="text-sm text-muted-foreground">Detox & Wellness</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Detoxify and improve circulation in our premium steam room
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              Book Appointment
            </Button>
          </Card>
        </div>
      </div>

      {/* Upcoming */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Upcoming Schedule</h3>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">PT Session with Mike</h4>
              <p className="text-sm text-muted-foreground">Tomorrow at 10:00 AM</p>
            </div>
            <Button size="sm">View</Button>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Sauna Appointment</h4>
              <p className="text-sm text-muted-foreground">Dec 10 at 6:00 PM</p>
            </div>
            <Button size="sm" variant="outline">
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

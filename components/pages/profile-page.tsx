"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Calendar, MapPin, Edit, LogOut, Trophy, Target, Zap } from "lucide-react"

export function ProfilePage() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      {/* Profile Card */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <Avatar className="w-24 h-24 border-4 border-primary">
            <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <Badge className="mt-2">Premium Elite Member</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Joined Jan 2024</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Achievements</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
            <h4 className="font-bold">100 Workouts</h4>
            <p className="text-sm text-muted-foreground">Century Club</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold">30 Day Streak</h4>
            <p className="text-sm text-muted-foreground">Consistency King</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-8 h-8 text-destructive" />
            </div>
            <h4 className="font-bold">1000 XP</h4>
            <p className="text-sm text-muted-foreground">Level Master</p>
          </Card>
        </div>
      </div>

      {/* Membership Details */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">Membership Details</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Plan Type</span>
            <span className="font-semibold">Premium Elite</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Start Date</span>
            <span className="font-semibold">Jan 1, 2024</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Expiry Date</span>
            <span className="font-semibold">Dec 31, 2025</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">PT Sessions Remaining</span>
            <span className="font-semibold">8 / 20</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-muted-foreground">Status</span>
            <Badge>Active</Badge>
          </div>
        </div>
      </Card>

      {/* Settings */}
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4">Settings</h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <User className="w-4 h-4 mr-2" />
            Account Settings
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Mail className="w-4 h-4 mr-2" />
            Notification Preferences
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Calendar className="w-4 h-4 mr-2" />
            Booking History
          </Button>
        </div>
      </Card>

      {/* Logout */}
      <Button variant="destructive" className="w-full">
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  )
}

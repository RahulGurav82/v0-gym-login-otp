"use client"

import type React from "react"

import { useState } from "react"
import { Home, Dumbbell, Calendar, Users, MessageCircle, User } from "lucide-react"
import { HomePage } from "./pages/home-page"
import { PTPage } from "./pages/pt-page"
import { AppointmentsPage } from "./pages/appointments-page"
import { ClassesPage } from "./pages/classes-page"
import { CommunityPage } from "./pages/community-page"
import { ProfilePage } from "./pages/profile-page"

type Page = "home" | "pt" | "appointments" | "classes" | "community" | "profile"

export function AppLayout() {
  const [currentPage, setCurrentPage] = useState<Page>("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "pt":
        return <PTPage />
      case "appointments":
        return <AppointmentsPage />
      case "classes":
        return <ClassesPage />
      case "community":
        return <CommunityPage />
      case "profile":
        return <ProfilePage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto">{renderPage()}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 md:hidden">
        <div className="flex items-center justify-around h-20 px-2">
          <NavItem icon={Home} label="Home" isActive={currentPage === "home"} onClick={() => setCurrentPage("home")} />
          <NavItem icon={Dumbbell} label="PT" isActive={currentPage === "pt"} onClick={() => setCurrentPage("pt")} />
          <NavItem
            icon={Calendar}
            label="Appointments"
            isActive={currentPage === "appointments"}
            onClick={() => setCurrentPage("appointments")}
          />
          <NavItem
            icon={Users}
            label="Classes"
            isActive={currentPage === "classes"}
            onClick={() => setCurrentPage("classes")}
          />
          <NavItem
            icon={MessageCircle}
            label="Community"
            isActive={currentPage === "community"}
            onClick={() => setCurrentPage("community")}
          />
          <NavItem
            icon={User}
            label="Profile"
            isActive={currentPage === "profile"}
            onClick={() => setCurrentPage("profile")}
          />
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden md:block fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border z-50">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Dumbbell className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">APEX</h1>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">Fitness Club</p>
            </div>
          </div>
          <div className="space-y-2">
            <DesktopNavItem
              icon={Home}
              label="Home"
              isActive={currentPage === "home"}
              onClick={() => setCurrentPage("home")}
            />
            <DesktopNavItem
              icon={Dumbbell}
              label="PT Sessions"
              isActive={currentPage === "pt"}
              onClick={() => setCurrentPage("pt")}
            />
            <DesktopNavItem
              icon={Calendar}
              label="Appointments"
              isActive={currentPage === "appointments"}
              onClick={() => setCurrentPage("appointments")}
            />
            <DesktopNavItem
              icon={Users}
              label="Classes"
              isActive={currentPage === "classes"}
              onClick={() => setCurrentPage("classes")}
            />
            <DesktopNavItem
              icon={MessageCircle}
              label="Community"
              isActive={currentPage === "community"}
              onClick={() => setCurrentPage("community")}
            />
            <DesktopNavItem
              icon={User}
              label="Profile"
              isActive={currentPage === "profile"}
              onClick={() => setCurrentPage("profile")}
            />
          </div>
        </div>
      </nav>

      {/* Desktop Content Offset */}
      <div className="hidden md:block md:ml-64" />
    </div>
  )
}

function NavItem({
  icon: Icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ElementType
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all ${
        isActive ? "text-primary" : "text-muted-foreground"
      }`}
    >
      <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""} transition-transform`} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  )
}

function DesktopNavItem({
  icon: Icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ElementType
  label: string
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${
        isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  )
}

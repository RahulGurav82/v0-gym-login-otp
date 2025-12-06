"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Flame, Droplets, Wind, Calendar, CheckCircle, XCircle, Clock } from "lucide-react"

type Amenity = "sauna" | "ice-bath" | "steam"
type AppointmentStatus = "pending" | "approved" | "rejected" | "reschedule-requested"

type Appointment = {
  id: string
  amenity: Amenity
  date: string
  time: string
  status: AppointmentStatus
  rescheduleDate?: string
  rescheduleTime?: string
}

const amenityConfig = {
  sauna: { name: "Sauna", icon: Flame, color: "text-destructive", bgColor: "bg-destructive/10" },
  "ice-bath": { name: "Ice Bath", icon: Droplets, color: "text-blue-500", bgColor: "bg-blue-500/10" },
  steam: { name: "Steam Room", icon: Wind, color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
}

export function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: "1",
      amenity: "sauna",
      date: "Dec 10, 2024",
      time: "6:00 PM",
      status: "approved",
    },
    {
      id: "2",
      amenity: "ice-bath",
      date: "Dec 12, 2024",
      time: "7:00 PM",
      status: "pending",
    },
    {
      id: "3",
      amenity: "steam",
      date: "Dec 8, 2024",
      time: "5:00 PM",
      status: "reschedule-requested",
      rescheduleDate: "Dec 9, 2024",
      rescheduleTime: "6:00 PM",
    },
  ])

  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | "">("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleBooking = () => {
    if (!selectedAmenity || !selectedDate || !selectedTime) return

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      amenity: selectedAmenity,
      date: selectedDate,
      time: selectedTime,
      status: "pending",
    }

    setAppointments([newAppointment, ...appointments])
    setIsBookingOpen(false)
    setSelectedAmenity("")
    setSelectedDate("")
    setSelectedTime("")
  }

  const handleCancel = (id: string) => {
    setAppointments(appointments.filter((a) => a.id !== id))
  }

  const handleAcceptReschedule = (id: string) => {
    setAppointments(
      appointments.map((a) =>
        a.id === id
          ? {
              ...a,
              date: a.rescheduleDate || a.date,
              time: a.rescheduleTime || a.time,
              status: "approved",
              rescheduleDate: undefined,
              rescheduleTime: undefined,
            }
          : a,
      ),
    )
  }

  const handleRejectReschedule = (id: string) => {
    setAppointments(appointments.map((a) => (a.id === id ? { ...a, status: "approved" as const } : a)))
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Book and manage your amenity appointments</p>
        </div>
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogTrigger asChild>
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book Appointment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Select Amenity</Label>
                <Select value={selectedAmenity} onValueChange={(value) => setSelectedAmenity(value as Amenity)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose amenity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sauna">Sauna</SelectItem>
                    <SelectItem value="ice-bath">Ice Bath</SelectItem>
                    <SelectItem value="steam">Steam Room</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Select value={selectedDate} onValueChange={setSelectedDate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dec 15, 2024">Dec 15, 2024</SelectItem>
                    <SelectItem value="Dec 16, 2024">Dec 16, 2024</SelectItem>
                    <SelectItem value="Dec 17, 2024">Dec 17, 2024</SelectItem>
                    <SelectItem value="Dec 18, 2024">Dec 18, 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Select Time</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                    <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                    <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                    <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleBooking}
                className="w-full"
                disabled={!selectedAmenity || !selectedDate || !selectedTime}
              >
                Confirm Booking
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {appointments.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No appointments yet. Book your first session!</p>
          </Card>
        ) : (
          appointments.map((appointment) => {
            const config = amenityConfig[appointment.amenity]
            const Icon = config.icon

            return (
              <Card key={appointment.id} className="p-6">
                <div className="space-y-4">
                  {/* Appointment Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl ${config.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${config.color}`} />
                      </div>
                      <div>
                        <h4 className="font-bold">{config.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        appointment.status === "approved"
                          ? "default"
                          : appointment.status === "rejected"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {appointment.status === "pending" && <Clock className="w-3 h-3 mr-1" />}
                      {appointment.status === "approved" && <CheckCircle className="w-3 h-3 mr-1" />}
                      {appointment.status === "rejected" && <XCircle className="w-3 h-3 mr-1" />}
                      {appointment.status === "reschedule-requested" && <Clock className="w-3 h-3 mr-1" />}
                      {appointment.status.replace("-", " ").toUpperCase()}
                    </Badge>
                  </div>

                  {/* Reschedule Request */}
                  {appointment.status === "reschedule-requested" && (
                    <div className="p-4 rounded-lg bg-secondary border border-border space-y-3">
                      <p className="text-sm font-medium">Receptionist has requested to reschedule:</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>
                          New time: {appointment.rescheduleDate} at {appointment.rescheduleTime}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={() => handleAcceptReschedule(appointment.id)} size="sm" className="flex-1">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Accept
                        </Button>
                        <Button
                          onClick={() => handleRejectReschedule(appointment.id)}
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Cancel Button */}
                  {(appointment.status === "approved" || appointment.status === "pending") && (
                    <Button
                      onClick={() => handleCancel(appointment.id)}
                      variant="destructive"
                      className="w-full"
                      size="sm"
                    >
                      Cancel Appointment
                    </Button>
                  )}
                </div>
              </Card>
            )
          })
        )}
      </div>
    </div>
  )
}

import { useAuth } from "@/hooks/use-auth";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Check, X, Clock, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { BackButton } from "@/components/common/BackButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

// Mock attendance data for demonstration
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const MOCK_ATTENDANCE_DATA = [
  { date: "2025-04-01", status: "present" },
  { date: "2025-04-02", status: "present" },
  { date: "2025-04-03", status: "present" },
  { date: "2025-04-04", status: "present" },
  { date: "2025-04-07", status: "present" },
  { date: "2025-04-08", status: "present" },
  { date: "2025-04-09", status: "late" },
  { date: "2025-04-10", status: "present" },
  { date: "2025-04-11", status: "present" },
  { date: "2025-04-14", status: "absent" },
  { date: "2025-04-15", status: "excused" },
  { date: "2025-04-16", status: "present" },
  { date: "2025-04-17", status: "present" },
  { date: "2025-04-18", status: "present" },
  { date: "2025-04-21", status: "present" },
  { date: "2025-04-22", status: "present" },
  { date: "2025-04-23", status: "late" },
  { date: "2025-04-24", status: "present" },
  { date: "2025-04-25", status: "present" },
  { date: "2025-04-28", status: "present" },
  { date: "2025-04-29", status: "present" },
  { date: "2025-04-30", status: "late" }
];

// Map status to colors and icons
const statusConfig = {
  present: { color: "text-green-500", icon: Check, bgColor: "bg-green-100" },
  absent: { color: "text-red-500", icon: X, bgColor: "bg-red-100" },
  late: { color: "text-yellow-500", icon: Clock, bgColor: "bg-yellow-100" },
  excused: { color: "text-blue-500", icon: Bookmark, bgColor: "bg-blue-100" }
};

export default function AttendancePage() {
  const { user } = useAuth();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedMonth, setSelectedMonth] = useState<string>("April");
  
  // Count attendance by status
  const attendanceCounts = MOCK_ATTENDANCE_DATA.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Calculate percentage
  const totalDays = MOCK_ATTENDANCE_DATA.length;
  const presentDays = attendanceCounts.present || 0;
  const attendancePercentage = Math.round((presentDays / totalDays) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Attendance Records</h2>
          <p className="text-muted-foreground">
            View and track your attendance throughout the academic year
          </p>
        </div>

        {/* Attendance Summary */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Overall Attendance</CardTitle>
              <CardDescription>Attendance summary for current academic year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Attendance Rate</span>
                  <span className="text-2xl font-bold text-primary">{attendancePercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${attendancePercentage}%` }}
                  ></div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mb-2">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-sm font-medium">Present</span>
                    <span className="text-xl font-bold text-green-500">{attendanceCounts.present || 0}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 mb-2">
                      <X className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-sm font-medium">Absent</span>
                    <span className="text-xl font-bold text-red-500">{attendanceCounts.absent || 0}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 mb-2">
                      <Clock className="h-4 w-4 text-yellow-500" />
                    </div>
                    <span className="text-sm font-medium">Late</span>
                    <span className="text-xl font-bold text-yellow-500">{attendanceCounts.late || 0}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 mb-2">
                      <Bookmark className="h-4 w-4 text-blue-500" />
                    </div>
                    <span className="text-sm font-medium">Excused</span>
                    <span className="text-xl font-bold text-blue-500">{attendanceCounts.excused || 0}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
              <CardDescription className="flex justify-between items-center">
                <span>Visual representation of your attendance</span>
                <Select
                  value={selectedMonth}
                  onValueChange={setSelectedMonth}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    {MONTHS.map(month => (
                      <SelectItem key={month} value={month}>{month}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="flex justify-between mt-4">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs">Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-xs">Absent</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-xs">Late</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-xs">Excused</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Attendance Records */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Records</CardTitle>
            <CardDescription>Daily attendance for {selectedMonth} 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-3 md:grid-cols-7 p-3 bg-muted font-medium">
                <div>Date</div>
                <div className="hidden md:block">Day</div>
                <div>Status</div>
                <div className="hidden md:block">Time In</div>
                <div className="hidden md:block">Time Out</div>
                <div className="hidden md:block">Duration</div>
                <div>Comment</div>
              </div>
              <div className="divide-y">
                {MOCK_ATTENDANCE_DATA.map((record, index) => {
                  const date = new Date(record.date);
                  const dayName = date.toLocaleString('en-US', { weekday: 'short' });
                  const { color, icon: Icon, bgColor } = statusConfig[record.status as keyof typeof statusConfig];
                  
                  return (
                    <div key={index} className="grid grid-cols-3 md:grid-cols-7 p-3 items-center">
                      <div>{date.toLocaleDateString()}</div>
                      <div className="hidden md:block">{dayName}</div>
                      <div>
                        <Badge 
                          variant="outline" 
                          className={`${color} ${bgColor} border-0 flex items-center gap-1`}
                        >
                          <Icon className="h-3 w-3" />
                          <span className="capitalize">{record.status}</span>
                        </Badge>
                      </div>
                      <div className="hidden md:block">
                        {record.status === 'present' ? '8:30 AM' : 
                         record.status === 'late' ? '9:15 AM' : '-'}
                      </div>
                      <div className="hidden md:block">
                        {record.status === 'present' || record.status === 'late' ? '3:30 PM' : '-'}
                      </div>
                      <div className="hidden md:block">
                        {record.status === 'present' ? '7h 00m' : 
                         record.status === 'late' ? '6h 15m' : '-'}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {record.status === 'excused' ? 'Doctor appointment' : 
                         record.status === 'absent' ? 'No show' : 
                         record.status === 'late' ? 'Traffic delay' : '-'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <BackButton to="/dashboard" label="Back to Dashboard" />
          <Button>Download Report</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
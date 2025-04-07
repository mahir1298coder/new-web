import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Calendar, 
  ClipboardList, 
  AlertCircle, 
  Check, 
  Clock,
  BarChart3
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { BackButton } from "@/components/common/BackButton";
import { Course, Assignment, Notice } from "@shared/schema";

export default function StudentDashboard() {
  const { user } = useAuth();

  // Fetch student's courses
  const { 
    data: courses,
    isLoading: coursesLoading 
  } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
    enabled: !!user?.id
  });

  // Fetch upcoming assignments
  const { 
    data: assignments,
    isLoading: assignmentsLoading 
  } = useQuery<Assignment[]>({
    queryKey: ["/api/assignments/upcoming"],
    enabled: !!user?.id
  });

  // Fetch recent notices
  const { 
    data: notices,
    isLoading: noticesLoading 
  } = useQuery<Notice[]>({
    queryKey: ["/api/notices"],
    enabled: !!user?.id
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Welcome, {user?.name}</h2>
            <p className="text-muted-foreground">
              Here's an overview of your academic progress and upcoming tasks
            </p>
          </div>
          <BackButton to="/" label="Back to Home" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Upcoming Assignments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Assignments</CardTitle>
              <CardDescription>
                Your pending assignments for this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              {assignmentsLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ) : assignments && assignments.length > 0 ? (
                <div className="space-y-4">
                  {assignments.slice(0, 3).map((assignment) => (
                    <div 
                      key={assignment.id} 
                      className="flex items-start justify-between p-3 border rounded-lg"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <ClipboardList className="h-4 w-4 text-primary" />
                          <span className="font-medium">{assignment.title}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Due on {new Date(assignment.dueDate).toLocaleDateString()}
                        </div>
                      </div>
                      <Badge variant={getDueDateBadgeVariant(assignment.dueDate)}>
                        {getDueDateStatus(assignment.dueDate)}
                      </Badge>
                    </div>
                  ))}
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dashboard/assignments">View All Assignments</Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <Check className="h-12 w-12 mx-auto mb-2 text-primary" />
                  <p>You're all caught up!</p>
                  <p className="text-sm">No pending assignments right now.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Notices */}
          <Card>
            <CardHeader>
              <CardTitle>Latest Notices</CardTitle>
              <CardDescription>
                Important announcements from your school
              </CardDescription>
            </CardHeader>
            <CardContent>
              {noticesLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ) : notices && notices.length > 0 ? (
                <div className="space-y-4">
                  {notices.slice(0, 3).map((notice) => (
                    <div 
                      key={notice.id} 
                      className="p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <AlertCircle className="h-4 w-4 text-primary" />
                        <span className="font-medium">{notice.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {notice.content}
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">
                        Posted on {new Date(notice.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/notice">View All Notices</Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  <p>No recent notices</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Attendance Section */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance</CardTitle>
            <CardDescription>
              Your recent attendance records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Current Month</h3>
                  <p className="text-sm text-muted-foreground">April 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">92%</p>
                  <p className="text-xs text-muted-foreground">Overall attendance</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 border rounded-lg">
                  <div className="text-sm font-medium">Present</div>
                  <div className="text-2xl font-bold text-green-500">23</div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="text-sm font-medium">Absent</div>
                  <div className="text-2xl font-bold text-red-500">2</div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="text-sm font-medium">Late</div>
                  <div className="text-2xl font-bold text-yellow-500">3</div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="text-sm font-medium">Excused</div>
                  <div className="text-2xl font-bold text-blue-500">1</div>
                  <div className="text-xs text-muted-foreground">days</div>
                </div>
              </div>

              <div className="pt-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/dashboard/attendance">View Full Attendance</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* My Courses Section */}
        <Card>
          <CardHeader>
            <CardTitle>My Courses</CardTitle>
            <CardDescription>
              Courses you're currently enrolled in
            </CardDescription>
          </CardHeader>
          <CardContent>
            {coursesLoading ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
            ) : courses && courses.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <div 
                    key={course.id} 
                    className="p-4 border rounded-lg hover:border-primary transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium">{course.name}</h3>
                      <Badge variant="outline">{course.code}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {course.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-auto"
                    >
                      <Link href={`/dashboard/courses/${course.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                <p>You are not enrolled in any courses yet.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  linkTo: string;
}

function StatsCard({ title, value, description, icon: Icon, linkTo }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <Button asChild variant="ghost" size="sm" className="mt-2 px-0">
          <Link href={linkTo}>
            <span className="text-primary">View details →</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

// Helper functions for assignment due dates
function getDueDateStatus(dueDate: string | Date): string {
  const now = new Date();
  const due = new Date(dueDate);
  const diffDays = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'Overdue';
  if (diffDays === 0) return 'Due Today';
  if (diffDays === 1) return 'Due Tomorrow';
  if (diffDays <= 3) return `Due in ${diffDays} days`;
  return `Due on ${due.toLocaleDateString()}`;
}

function getDueDateBadgeVariant(dueDate: string | Date): "default" | "destructive" | "outline" | "secondary" {
  const now = new Date();
  const due = new Date(dueDate);
  const diffDays = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'destructive';
  if (diffDays <= 1) return 'default';
  if (diffDays <= 3) return 'secondary';
  return 'outline';
}
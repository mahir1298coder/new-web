import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import AdmissionPage from "@/pages/AdmissionPage";
import GalleryPage from "@/pages/GalleryPage";
import NoticePage from "@/pages/NoticePage";
import ContactPage from "@/pages/ContactPage";
import AuthPage from "@/pages/auth-page";
import NotFound from "@/pages/not-found";
import StudentDashboard from "@/pages/dashboard/StudentDashboard";
import AttendancePage from "@/pages/dashboard/AttendancePage";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/components/common/ProtectedRoute";
import { LoginModalProvider } from "@/hooks/use-login-modal";
import { Toaster } from "@/components/ui/toaster";

function Router() {
  return (
    <Switch>
      {/* Public routes */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admission" component={AdmissionPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/notice" component={NoticePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/auth" component={AuthPage} />
      
      {/* Protected routes */}
      <ProtectedRoute path="/dashboard" component={StudentDashboard} />
      {/* Additional dashboard routes - will be added later */}
      <ProtectedRoute path="/dashboard/courses" component={StudentDashboard} />
      <ProtectedRoute path="/dashboard/assignments" component={StudentDashboard} />
      <ProtectedRoute path="/dashboard/attendance" component={AttendancePage} />
      <ProtectedRoute path="/dashboard/grades" component={StudentDashboard} />
      
      {/* Admin routes - will be added later */}
      {/* <ProtectedRoute path="/admin" component={AdminDashboard} requiredRole="admin" /> */}
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LoginModalProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
            <Toaster />
          </div>
        </LoginModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { Redirect, Route } from "wouter";

type ProtectedRouteProps = {
  path: string;
  component: React.ComponentType;
  requiredRole?: "admin" | "teacher" | "any";
};

export function ProtectedRoute({
  path,
  component: Component,
  requiredRole = "any",
}: ProtectedRouteProps) {
  const { user, isLoading, isAdmin, isTeacher } = useAuth();

  return (
    <Route
      path={path}
      component={() => {
        if (isLoading) {
          return (
            <div className="flex items-center justify-center min-h-screen">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          );
        }

        if (!user) {
          return <Redirect to="/auth" />;
        }

        // Check for role-based access
        if (requiredRole === "admin" && !isAdmin) {
          return <Redirect to="/" />;
        }

        if (requiredRole === "teacher" && !isTeacher) {
          return <Redirect to="/" />;
        }

        return <Component />;
      }}
    />
  );
}
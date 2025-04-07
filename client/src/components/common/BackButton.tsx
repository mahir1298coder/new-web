import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

type BackButtonProps = {
  to: string;
  label?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  light?: boolean;
};

export function BackButton({ 
  to, 
  label = "Back", 
  variant = "outline", 
  className = "",
  light = false
}: BackButtonProps) {
  return (
    <Button 
      asChild 
      variant={variant} 
      className={`flex items-center gap-1 ${light ? 'text-white border-white hover:bg-white/20' : ''} ${className}`}
    >
      <Link href={to}>
        <ArrowLeft className="h-4 w-4" />
        {label}
      </Link>
    </Button>
  );
}
import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import { SCHOOL_NAME } from "@/lib/constants";
import { useLoginModal } from "@/hooks/use-login-modal";
import { useAuth } from "@/hooks/use-auth";
import LoginModal from "@/components/common/LoginModal";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, LogOut, Menu, User } from "lucide-react";

const Header = () => {
  const [currentPath] = useLocation();
  const { openModal } = useLoginModal();
  const { user, logoutMutation } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user) return "G";
    return user.name
      .split(" ")
      .map(part => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <>
      <header 
        className={`bg-primary text-white sticky top-0 z-50 transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
                <div className="h-12 w-12 rounded-full mr-3 bg-white flex items-center justify-center overflow-hidden">
                  {/* School logo would be an SVG ideally */}
                  <svg
                    className="h-10 w-10 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 22h20V12H2z" />
                    <path d="M12 2L2 12l10-2 10 2-10-10z" />
                  </svg>
                </div>
                <span className="font-bold text-xl">{SCHOOL_NAME}</span>
              </Link>
              <Sheet>
                <SheetTrigger className="md:hidden focus:outline-none">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-primary text-white p-6">
                  <nav className="flex flex-col space-y-4 mt-6">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.name}
                        href={link.path}
                        className={`py-2 text-lg font-medium ${
                          currentPath === link.path
                            ? "font-bold"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                    {user ? (
                      <>
                        <Link
                          href="/dashboard"
                          className="py-2 text-lg font-medium text-white/80 hover:text-white text-left"
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="py-2 text-lg font-medium text-white/80 hover:text-white text-left flex items-center space-x-2"
                          disabled={logoutMutation.isPending}
                        >
                          {logoutMutation.isPending ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              <span>Logging out...</span>
                            </>
                          ) : (
                            <>
                              <LogOut className="h-4 w-4 mr-2" />
                              <span>Logout</span>
                            </>
                          )}
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={openModal}
                        className="py-2 text-lg font-medium text-white/80 hover:text-white text-left"
                      >
                        Login
                      </button>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <nav className="hidden md:flex flex-col md:flex-row items-center mt-4 md:mt-0">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`mr-6 py-2 md:py-0 font-medium relative nav-link group`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-[-4px] left-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full ${
                      currentPath === link.path ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Link>
              ))}
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8 bg-white">
                        <AvatarFallback className="text-primary font-medium">
                          {getUserInitials()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="cursor-pointer">
                        <User className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      className="text-red-500" 
                      onClick={handleLogout}
                      disabled={logoutMutation.isPending}
                    >
                      {logoutMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Logging out...</span>
                        </>
                      ) : (
                        <>
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Logout</span>
                        </>
                      )}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  onClick={openModal}
                  className="py-2 md:py-0 font-medium relative nav-link group"
                >
                  Login
                  <span className="absolute bottom-[-4px] left-0 h-[2px] bg-white transition-all duration-300 w-0 group-hover:w-full"></span>
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>
      <LoginModal />
    </>
  );
};

export default Header;

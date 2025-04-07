import { Link } from "wouter";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

type MobileMenuProps = {
  currentPath: string;
  onOpenLoginModal: () => void;
};

const MobileMenu = ({ currentPath, onOpenLoginModal }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-primary text-white">
        <nav className="flex flex-col gap-4 mt-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-lg py-2 px-4 rounded-md transition-colors ${
                currentPath === link.path
                  ? "bg-white/10 font-semibold"
                  : "hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={onOpenLoginModal}
            className="text-lg py-2 px-4 rounded-md transition-colors hover:bg-white/5 text-left"
          >
            Login
          </button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

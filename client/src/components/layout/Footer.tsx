import { Link } from "wouter";
import { SCHOOL_NAME, QUICK_LINKS, PROGRAMS, CONTACT_INFO } from "@/lib/constants";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full mr-3 bg-white flex items-center justify-center overflow-hidden">
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
            <p className="text-gray-300 mb-4">
              Providing quality education since 1995. Our mission is to empower students with knowledge and skills for a better future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-4">Programs</h4>
            <ul className="space-y-2">
              {PROGRAMS.map((program) => (
                <li key={program.name}>
                  <Link href={program.path} className="text-gray-300 hover:text-white transition-colors">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-gray-300">{CONTACT_INFO.hours.weekdays}</span>
                  <span className="block text-gray-300">{CONTACT_INFO.hours.saturday}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400">&copy; {currentYear} {SCHOOL_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

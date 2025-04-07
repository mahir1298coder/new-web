import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would typically send the form data to the backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  const SocialIcon = ({ name }: { name: string }) => {
    switch (name) {
      case "Facebook":
        return <Facebook className="h-4 w-4" />;
      case "Twitter":
        return <Twitter className="h-4 w-4" />;
      case "Instagram":
        return <Instagram className="h-4 w-4" />;
      case "Youtube":
        return <Youtube className="h-4 w-4" />;
      default:
        return null;
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to answer any questions you may have
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-[#3a5b9f]">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-1/2">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-primary">Our Address</h4>
                      <p className="text-gray-600">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-primary">Phone Number</h4>
                      <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-primary">Email</h4>
                      <p className="text-gray-600">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-primary">Office Hours</h4>
                      <p className="text-gray-600">{CONTACT_INFO.hours.weekdays}</p>
                      <p className="text-gray-600">{CONTACT_INFO.hours.saturday}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-primary mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    {CONTACT_INFO.social.map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-[#3a5b9f]"
                      >
                        <SocialIcon name={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#3a5b9f]">
            View Contact Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

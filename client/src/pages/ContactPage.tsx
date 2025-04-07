import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { useToast } from "@/hooks/use-toast";
import { BackButton } from "@/components/common/BackButton";

const ContactPage = () => {
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
    <div className="bg-secondary min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <BackButton to="/" light />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl">
              We'd love to hear from you. Reach out to us with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Card */}
              <Card className="lg:col-span-1">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                  
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
              
              {/* Contact Form */}
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        rows={6}
                        className="w-full"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="bg-primary hover:bg-[#3a5b9f]">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6">Our Location</h2>
            <div className="h-[400px] bg-gray-300 rounded-lg">
              {/* In a real implementation, we would use a map integration like Google Maps */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-600">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

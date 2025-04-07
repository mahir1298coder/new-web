import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ADMISSION_STEPS } from "@/lib/constants";
import { BackButton } from "@/components/common/BackButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AdmissionPage = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, we would send this data to the server
    // For now, just show a success toast
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We will contact you soon.",
    });
    
    setFormSubmitted(true);
  };
  
  return (
    <div className="bg-secondary min-h-screen">
      <div className="container mx-auto px-4 pt-4">
        <div className="flex justify-end">
          <BackButton to="/" />
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Admission Information</h1>
            <p className="text-xl mb-8">
              Join our school community and embark on a journey of academic excellence and personal growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Admission Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary text-center">
                      Application Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {formSubmitted ? (
                      <div className="text-center p-6">
                        <div className="mb-4 text-green-600 text-5xl">✓</div>
                        <h3 className="text-xl font-semibold mb-2">Application Submitted</h3>
                        <p className="text-gray-600 mb-4">
                          Thank you for your interest in Mount Zion School. Our admissions team will review your application and contact you shortly.
                        </p>
                        <Button 
                          onClick={() => setFormSubmitted(false)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Submit Another Application
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Enter student's full name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth *</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="class">Class Applying For *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                            <SelectContent>
                              {[...Array(12)].map((_, i) => (
                                <SelectItem key={i} value={`${i+1}`}>
                                  Class {i+1}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="mobile">Mobile Number *</Label>
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="Enter mobile number"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address (Optional)</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="marksheet">Previous Class Marksheet *</Label>
                          <label htmlFor="marksheet" className="block">
                            <div className="border-2 border-dashed rounded-md p-4 border-gray-300 hover:border-primary transition-colors cursor-pointer">
                              <div className="flex flex-col items-center">
                                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                                <p className="text-sm font-medium mb-1">Drag and drop or click to upload</p>
                                <p className="text-xs text-gray-500">PDF, JPG or PNG (max 5MB)</p>
                                {selectedFile && (
                                  <p className="text-xs text-green-600 mt-2">
                                    {selectedFile.name} selected
                                  </p>
                                )}
                              </div>
                            </div>
                          </label>
                          <Input
                            id="marksheet"
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            required
                          />
                        </div>
                        
                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          Submit Application
                        </Button>
                        
                        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
                          <p className="text-amber-800 text-sm font-medium">
                            <strong>Note:</strong> This is only an online form. You must visit the school office to confirm your seat.
                          </p>
                        </div>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <p className="text-gray-600 mb-6">
                  We welcome applications from students who are eager to learn and grow in our nurturing environment. 
                  Our admission process is designed to be straightforward and supportive.
                </p>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Required Documents</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Completed application form</li>
                      <li>Birth certificate (original and photocopy)</li>
                      <li>Passport-sized photographs (4 copies)</li>
                      <li>Previous class marksheet</li>
                      <li>Transfer certificate (if coming from another school)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium text-primary">
                  What is the age requirement for admission?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  For kindergarten, children must be at least 3 years old by June 1st of the academic year. 
                  For other grades, the age requirement varies accordingly.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium text-primary">
                  Is there an entrance examination?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we conduct a grade-appropriate assessment to understand the student's academic readiness. 
                  This helps us ensure that we can provide the right level of support for each student.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium text-primary">
                  What is the fee structure?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our fee structure varies by grade level. It includes tuition fees, development fees, and other 
                  charges for extracurricular activities. Detailed fee information is provided during the admission process.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium text-primary">
                  When does the academic year begin?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our academic year typically begins in the first week of July. However, admissions may be 
                  open throughout the year depending on seat availability.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;

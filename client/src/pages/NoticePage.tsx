import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { NOTICES } from "@/lib/constants";
import { BackButton } from "@/components/common/BackButton";

// Extended notices for this page
const extendedNotices = [
  ...NOTICES,
  {
    id: 4,
    title: "Summer Camp Registration Open",
    description: "Registration for our summer camp programs is now open. Limited spots available for various activities including sports, arts, and STEM programs.",
    date: "July 10, 2023"
  },
  {
    id: 5,
    title: "School Renovation Updates",
    description: "The school infrastructure renovation project is progressing as scheduled. The new computer lab will be operational by next month.",
    date: "July 5, 2023"
  },
  {
    id: 6,
    title: "Vaccination Drive for Students",
    description: "A vaccination drive for all students will be conducted on July 2nd. Parental consent forms have been sent home with students.",
    date: "June 28, 2023"
  },
  {
    id: 7,
    title: "New Library Books Arrival",
    description: "Our school library has received a new collection of books across various subjects. Students can start borrowing them from next week.",
    date: "June 25, 2023"
  },
  {
    id: 8,
    title: "School Trip Announcement",
    description: "An educational trip to the Science Museum is planned for grade 7 students on July 8th. Permission slips will be distributed next week.",
    date: "June 22, 2023"
  }
];

const NoticePage = () => {
  return (
    <div className="bg-secondary min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <BackButton to="/" />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Notices & Announcements</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from our school.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 relative">
            <Input 
              placeholder="Search notices..." 
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 gap-6 mb-12">
            {extendedNotices.map((notice) => (
              <Card key={notice.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{notice.title}</h3>
                      <p className="text-gray-600 mb-3">{notice.description}</p>
                      <Button variant="link" className="text-[#3a5b9f] p-0 h-auto">Read more</Button>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-right flex-shrink-0">
                      <span className="inline-block bg-gray-200 text-primary-dark text-sm font-medium px-3 py-1 rounded-full">
                        {notice.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2">
            <Button variant="outline" className="text-primary" disabled>Previous</Button>
            <Button variant="outline" className="bg-primary text-white">1</Button>
            <Button variant="outline" className="text-primary">2</Button>
            <Button variant="outline" className="text-primary">3</Button>
            <Button variant="outline" className="text-primary">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;

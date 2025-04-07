import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X } from "lucide-react";
import { BackButton } from "@/components/common/BackButton";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  // Additional images for each category
  const classroomImages = [
    ...GALLERY_IMAGES.slice(0, 2),
    {
      id: 101,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Modern classroom"
    },
    {
      id: 102,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Art class"
    }
  ];
  
  const sportsImages = [
    GALLERY_IMAGES[3],
    {
      id: 103,
      src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Basketball court"
    },
    {
      id: 104,
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Football match"
    },
    {
      id: 105,
      src: "https://images.unsplash.com/photo-1551958219-e29952a5d85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Swim practice"
    }
  ];
  
  const eventsImages = [
    GALLERY_IMAGES[7],
    {
      id: 106,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Annual day celebration"
    },
    {
      id: 107,
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "School concert"
    },
    {
      id: 108,
      src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "Graduation ceremony"
    }
  ];
  
  const facilitiesImages = [
    GALLERY_IMAGES[2],
    GALLERY_IMAGES[4],
    GALLERY_IMAGES[6],
    {
      id: 109,
      src: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      alt: "School cafeteria"
    }
  ];
  
  return (
    <div className="bg-secondary min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <BackButton to="/" />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">School Gallery</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore moments from our school life, events, and facilities through our photo gallery.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Photos</TabsTrigger>
              <TabsTrigger value="classroom">Classroom</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {GALLERY_IMAGES.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="classroom">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {classroomImages.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sports">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sportsImages.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="events">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {eventsImages.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="facilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {facilitiesImages.map((image) => (
                <div
                  key={image.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Looking for more? Check out our social media pages for the latest updates.</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
              Follow us on Facebook
            </Button>
            <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
              Follow us on Instagram
            </Button>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={closeLightbox}>
        <DialogContent 
          className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none"
          aria-describedby="lightbox-description"
        >
          <DialogTitle className="sr-only">Gallery Image</DialogTitle>
          <div id="lightbox-description" className="sr-only">
            School gallery image in full view
          </div>
          <DialogClose className="absolute top-2 right-2 z-10 bg-white rounded-full p-1">
            <X className="h-6 w-6" />
          </DialogClose>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Gallery image fullscreen" 
              className="w-full max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GalleryPage;

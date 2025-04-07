import { Link } from "wouter";
import { GALLERY_IMAGES } from "@/lib/constants";

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">School Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Glimpses of our vibrant campus life and activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/gallery" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#3a5b9f]">
            View More Photos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

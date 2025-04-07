import { Link } from "wouter";
import { SCHOOL_NAME } from "@/lib/constants";
import admissionImage from "@/assets/admission.jpg";

const Hero = () => {
  return (
    <section className="bg-[#3a5b9f] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome to {SCHOOL_NAME}
            </h1>
            <p className="text-lg mb-6">
              Providing quality education and shaping the future leaders of tomorrow
            </p>
            {/* Hero buttons would go here if needed */}
          </div>
          <div className="md:w-1/2">
            <img
              src={admissionImage}
              alt="School admission open"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

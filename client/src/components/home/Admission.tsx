import { Link } from "wouter";
import { ADMISSION_STEPS } from "@/lib/constants";

const Admission = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Admission Process</h2>
            <p className="text-gray-600 mb-6">
              We welcome applications from students who are eager to learn and grow in our nurturing environment. 
              Our admission process is designed to be straightforward and supportive.
            </p>
            
            <div className="space-y-4">
              {ADMISSION_STEPS.map((step) => (
                <div key={step.id} className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">{step.id}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/admission" className="mt-8 inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#3a5b9f]">
              Apply Now
            </Link>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Students in admission office" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;

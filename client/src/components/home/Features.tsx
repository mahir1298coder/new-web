import { FEATURES } from "@/lib/constants";
import { 
  BookOpen, 
  ShieldCheck, 
  Users
} from "lucide-react";

const FeatureIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "BookOpen":
      return <BookOpen className="h-6 w-6" />;
    case "ShieldCheck":
      return <ShieldCheck className="h-6 w-6" />;
    case "Users":
      return <Users className="h-6 w-6" />;
    default:
      return <BookOpen className="h-6 w-6" />;
  }
};

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our school provides a nurturing environment where students can excel academically and develop personally
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-secondary rounded-lg p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

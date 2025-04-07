import { Card, CardContent } from "@/components/ui/card";
import { BackButton } from "@/components/common/BackButton";

const About = () => {
  return (
    <div className="bg-secondary min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <BackButton to="/" />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Our School</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn more about our history, mission, values, and the educational approach that sets us apart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Our History</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, Mount Zion School has a rich history of academic excellence and holistic development. 
              What started as a small institution with just a handful of students has now grown into a premier 
              educational institution in the region.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we have continuously evolved our curriculum and teaching methodologies to stay 
              at the forefront of educational innovation while maintaining our core values.
            </p>
          </div>
          <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="School Building" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To provide quality education that develops intellectual, spiritual, and physical potential 
                  of students in a safe, supportive environment that promotes self-discipline, motivation, 
                  and excellence in learning.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be a center of excellence in education that nurtures well-rounded individuals who will 
                  be leaders of tomorrow, contributing positively to the society with integrity, compassion, 
                  and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Integrity</h3>
                <p className="text-gray-600">We uphold honesty, ethics, and transparency in all our actions</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Respect</h3>
                <p className="text-gray-600">We treat everyone with dignity and embrace diversity</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for the highest standards in all our endeavors</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Innovation</h3>
                <p className="text-gray-600">We encourage creativity and adaptive thinking</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">Principal</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Vice Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary">Mr. David Thompson</h3>
                <p className="text-gray-600">Vice Principal</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Academic Dean" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary">Mrs. Emily Richards</h3>
                <p className="text-gray-600">Academic Dean</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

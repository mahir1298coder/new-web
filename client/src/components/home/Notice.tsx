import { Link } from "wouter";
import { NOTICES } from "@/lib/constants";

const Notice = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Latest Notices</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our recent announcements and events
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {NOTICES.map((notice) => (
            <div 
              key={notice.id}
              className="bg-white rounded-lg shadow-md p-6 mb-4 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{notice.title}</h3>
                  <p className="text-gray-600 mb-3">{notice.description}</p>
                  <Link href={`/notice/${notice.id}`} className="text-[#3a5b9f] font-medium hover:underline">
                    Read more
                  </Link>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4 text-right flex-shrink-0">
                  <span className="inline-block bg-secondary-dark text-primary-dark text-sm font-medium px-3 py-1 rounded-full">
                    {notice.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/notice" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#3a5b9f]">
            View All Notices
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Notice;

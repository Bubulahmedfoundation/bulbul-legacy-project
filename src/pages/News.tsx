
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { Calendar } from "lucide-react";

const News = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newsItems = [
    {
      title: "2023 Bulbul Ahmed Memorial Award Ceremony",
      date: "November 15, 2023",
      excerpt: "The foundation recently hosted the 2023 Memorial Award ceremony, honoring Anisul Hoque for his contributions to Bangladeshi literature.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=2000",
      type: "event"
    },
    {
      title: "Winter Drive 2023 Preparations Underway",
      date: "October 20, 2023",
      excerpt: "Preparations have begun for our annual winter drive, with a goal to distribute 5000 blankets to northern Bangladesh communities.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=2000",
      type: "news"
    },
    {
      title: "Foundation Opens New Office in Chittagong",
      date: "September 5, 2023",
      excerpt: "To better serve communities in southeastern Bangladesh, BAFT has opened a new regional office in Chittagong.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000",
      type: "news"
    },
    {
      title: "Educational Support Program Reaches 15 New Schools",
      date: "August 12, 2023",
      excerpt: "Our school support program has expanded to include 15 additional schools in rural districts, providing educational materials and teacher training.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
      type: "news"
    }
  ];

  const videoItems = [
    {
      title: "2022 Awards Ceremony Highlights",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000",
      videoId: "dQw4w9WgXcQ"
    },
    {
      title: "Interview with Foundation Chairperson",
      thumbnail: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80&w=2000",
      videoId: "dQw4w9WgXcQ"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-baft-cream/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 heading-decoration">
            News & Events
          </h1>
          <p className="text-xl max-w-3xl">
            Stay updated with the latest news, events, and activities from the Bulbul Ahmed Foundation Trust.
          </p>
        </div>
      </section>

      {/* Latest News and Updates */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration">
            Latest Updates
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured News */}
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative h-80">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-baft-maroon text-white px-3 py-1 rounded-full text-sm">
                  Featured
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center text-baft-maroon text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{newsItems[0].date}</span>
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-3">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {newsItems[0].excerpt} The event was attended by prominent cultural figures, 
                  government officials, and previous award recipients. Mr. Hoque's acceptance speech 
                  highlighted the importance of preserving Bangladesh's literary heritage in the 
                  digital age.
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <a href="#" className="text-baft-maroon font-medium hover:underline">
                  Read more →
                </a>
              </CardFooter>
            </Card>

            {/* News List */}
            <div className="space-y-6">
              {newsItems.slice(1).map((item, index) => (
                <div key={index} className="flex gap-4 pb-6 border-b last:border-b-0">
                  <div className="w-1/3">
                    <div className="aspect-video rounded overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-2/3">
                    <div className="flex items-center text-baft-maroon text-sm mb-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-playfair font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <a href="#" className="text-baft-maroon text-sm font-medium mt-2 inline-block hover:underline">
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-baft-cream/30">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-6 heading-decoration">
            Press Releases
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-baft-maroon text-sm mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>December 10, 2023</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">
                Foundation Receives Government Recognition for Cultural Preservation
              </h3>
              <p className="text-gray-600 mb-4">
                The Ministry of Cultural Affairs has recognized BAFT's contributions to preserving 
                Bangladesh's cultural heritage through its various programs and initiatives.
              </p>
              <a href="#" className="text-baft-maroon font-medium hover:underline">
                Read full press release
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-baft-maroon text-sm mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>October 5, 2023</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">
                Partnership with International Relief Organization Announced
              </h3>
              <p className="text-gray-600 mb-4">
                BAFT has entered into a partnership with Global Relief Initiative to expand its 
                humanitarian work in the Cox's Bazar refugee camps.
              </p>
              <a href="#" className="text-baft-maroon font-medium hover:underline">
                Read full press release
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center text-baft-maroon text-sm mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>August 23, 2023</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3">
                Annual Report Shows 30% Increase in Program Reach
              </h3>
              <p className="text-gray-600 mb-4">
                The foundation's 2023 annual report reveals a significant increase in program reach 
                and impact compared to previous years.
              </p>
              <a href="#" className="text-baft-maroon font-medium hover:underline">
                Read full press release
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration text-center">
            Video Gallery
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {videoItems.map((video, index) => (
              <div key={index} className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-baft-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold mt-4 mb-1">{video.title}</h3>
                <p className="text-gray-600">From the foundation's media archive</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-baft-maroon font-medium hover:underline inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Visit our YouTube channel for more videos
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-baft-cream/30">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration">
            Upcoming Events
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-baft-maroon text-white text-center p-4 rounded">
                  <span className="block text-2xl font-bold">25</span>
                  <span className="block text-sm">December</span>
                  <span className="block text-sm">2023</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  Winter Drive Launch Ceremony
                </h3>
                <p className="text-gray-600 mb-3">
                  Join us for the official launch of our 2023 Winter Drive campaign, featuring guest speakers 
                  and a presentation on this year's distribution plan.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    10:00 AM - 1:00 PM
                  </span>
                  <span className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Foundation Headquarters, Dhaka
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-baft-maroon text-white text-center p-4 rounded">
                  <span className="block text-2xl font-bold">15</span>
                  <span className="block text-sm">January</span>
                  <span className="block text-sm">2024</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  Film Screening: Bulbul Ahmed Retrospective
                </h3>
                <p className="text-gray-600 mb-3">
                  A special screening of selected films featuring Bulbul Ahmed, followed by a panel discussion 
                  on his contributions to Bangladeshi cinema.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    4:00 PM - 8:00 PM
                  </span>
                  <span className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Bangladesh National Museum Auditorium
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="bg-baft-maroon text-white text-center p-4 rounded">
                  <span className="block text-2xl font-bold">10</span>
                  <span className="block text-sm">February</span>
                  <span className="block text-sm">2024</span>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  Fundraising Gala Dinner
                </h3>
                <p className="text-gray-600 mb-3">
                  Annual fundraising dinner to support the foundation's programs for the coming year. 
                  The event will feature cultural performances and an auction of donated items.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    7:00 PM - 10:00 PM
                  </span>
                  <span className="flex items-center text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Radisson Blu Dhaka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;

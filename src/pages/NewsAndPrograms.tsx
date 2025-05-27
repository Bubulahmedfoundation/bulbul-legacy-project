import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Award, Gift, File, Users, Heart, Calendar } from "lucide-react";
import AwardGallery from "@/components/AwardGallery";
import { CMSContentList } from "@/components/CMSContent";

const NewsAndPrograms = () => {
  const location = useLocation();
  
  // Refs for program sections
  const awardRef = useRef<HTMLDivElement>(null);
  const winterRef = useRef<HTMLDivElement>(null);
  const refugeeRef = useRef<HTMLDivElement>(null);
  const schoolsRef = useRef<HTMLDivElement>(null);
  const covidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle hash navigation for program sections
    if (location.hash) {
      setTimeout(() => {
        const targetRef = {
          "#awards": awardRef,
          "#winter": winterRef,
          "#refugee": refugeeRef,
          "#schools": schoolsRef,
          "#covid": covidRef
        }[location.hash];
        if (targetRef && targetRef.current) {
          const yOffset = -80;
          const y = targetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  // News content
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

  // Award recipients from Programs page
  const awardRecipients = [{
    year: 2023,
    name: "Anisul Hoque",
    category: "Literature",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
  }, {
    year: 2022,
    name: "Ferdous Ahmed",
    category: "Film",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  }, {
    year: 2021,
    name: "Chanchal Chowdhury",
    category: "Acting",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  }, {
    year: 2020,
    name: "Shayan Chowdhury Arnob",
    category: "Music",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  }];

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-baft-cream/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 heading-decoration">
            News & Programs
          </h1>
          <p className="text-xl max-w-3xl">
            Stay updated with the latest news, events, and programs from the Bulbul Ahmed Foundation Trust.
          </p>
          
          {/* Quick jump links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#latest-news" className="text-sm px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-baft-maroon hover:text-white transition-colors">Latest News</a>
            <a href="#awards" className="text-sm px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-baft-maroon hover:text-white transition-colors">Memorial Award</a>
            <a href="#winter" className="text-sm px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-baft-maroon hover:text-white transition-colors">Winter Drives</a>
            <a href="#refugee" className="text-sm px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-baft-maroon hover:text-white transition-colors">Refugee Support</a>
            <a href="#schools" className="text-sm px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-baft-maroon hover:text-white transition-colors">School Support</a>
            <a href="#covid" className="text-sm px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-baft-maroon hover:text-white transition-colors">COVID-19 Relief</a>
          </div>
        </div>
      </section>

      {/* Latest News and Updates - using CMS */}
      <section id="latest-news" className="py-20">
        <div className="container">
          <CMSContentList 
            collection="news" 
            limit={6} 
            title="Latest News & Updates" 
          />
        </div>
      </section>

      {/* Press Releases - using CMS */}
      <section className="py-20 bg-baft-cream/30">
        <div className="container">
          <CMSContentList 
            collection="press-releases" 
            limit={6} 
            title="Press Releases" 
          />
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

      {/* Programs content - Memorial Award */}
      <section ref={awardRef} id="awards" className="py-20">
        <div className="container">
          <div className="flex items-center mb-8">
            <Award className="text-baft-gold w-8 h-8 mr-4" />
            <h2 className="text-3xl font-playfair font-semibold heading-decoration">
              Bulbul Ahmed Memorial Award
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="mb-4 leading-relaxed">
                Established in 2016, the Bulbul Ahmed Memorial Award recognizes outstanding contributions 
                to Bangladeshi arts, culture, and cinema. The award is presented annually to artists, 
                filmmakers, writers, and performers who exemplify excellence and innovation in their fields.
              </p>
              <p className="leading-relaxed">
                Recipients are selected by a distinguished panel of cultural figures and previous awardees. 
                The award includes a gold medal, a certificate of recognition, and a cash prize to support 
                the recipient's continued work in their field.
              </p>
            </div>
            <div className="relative">
              <div className="border-4 border-white shadow-md rounded overflow-hidden">
                <img alt="Bulbul Ahmed" src="/lovable-uploads/76d0401f-4560-4de5-b17d-8e3e19c41826.jpg" className="w-full object-scale-down" />
              </div>
            </div>
          </div>

          <AwardGallery />

          <h3 className="text-2xl font-playfair font-semibold mb-6">Recent Recipients</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awardRecipients.map((recipient, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img src={recipient.image} alt={recipient.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-playfair font-semibold text-lg">{recipient.name}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-baft-maroon">{recipient.category}</span>
                    <span className="font-medium">{recipient.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Winter Drive Section */}
      <section ref={winterRef} id="winter" className="py-20 bg-baft-cream/30">
        <div className="container">
          <div className="flex items-center mb-8">
            <Gift className="text-baft-gold w-8 h-8 mr-4" />
            <h2 className="text-3xl font-playfair font-semibold heading-decoration">
              Winter Drives and Humanitarian Work
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative order-2 md:order-1">
              <div className="border-4 border-white shadow-md rounded overflow-hidden">
                <img src="/lovable-uploads/777c0309-72f2-45fe-ab8e-ef4df1c05102.png" alt="Winter drive distribution" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="mb-4 leading-relaxed">
                Every winter since 2016, the foundation organizes winter drives to distribute blankets, 
                warm clothing, and other essentials to disadvantaged communities across Bangladesh's 
                northern regions, where temperatures can drop significantly during winter months.
              </p>
              <p className="mb-4 leading-relaxed">
                Beyond winter relief, the foundation provides year-round humanitarian support in response 
                to natural disasters, including floods and cyclones that regularly affect Bangladesh.
              </p>
              <p className="leading-relaxed">
                Our humanitarian initiatives engage volunteers from local communities and universities, 
                fostering a spirit of service and solidarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Refugee Support */}
      <section ref={refugeeRef} id="refugee" className="py-20">
        <div className="container">
          <div className="flex items-center mb-8">
            <Users className="text-baft-gold w-8 h-8 mr-4" />
            <h2 className="text-3xl font-playfair font-semibold heading-decoration">
              Rohingya Refugee Support
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-4 leading-relaxed">
                Since 2017, the foundation has been actively involved in providing aid to Rohingya refugees 
                in Cox's Bazar, Bangladesh. Our support includes distributing essential supplies, setting up 
                medical camps, and organizing educational activities for children in the refugee camps.
              </p>
              <p className="mb-4 leading-relaxed">
                The foundation works in partnership with local and international NGOs to maximize the impact 
                of these efforts and ensure aid reaches those most in need.
              </p>
              <p className="leading-relaxed">
                We also advocate for the rights and dignity of refugees through awareness campaigns and 
                cultural events that highlight their plight and resilience.
              </p>
            </div>
            <div className="relative">
              <div className="border-4 border-white shadow-md rounded overflow-hidden">
                <img src="/lovable-uploads/057c4d23-f52f-4405-8d04-d9226dea839d.png" alt="Refugee support program" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Support */}
      <section ref={schoolsRef} id="schools" className="py-20 bg-baft-cream/30">
        <div className="container">
          <div className="flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-baft-gold w-8 h-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <h2 className="text-3xl font-playfair font-semibold heading-decoration">
              Support for Schools and Nursing Homes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative order-2 md:order-1">
              <div className="border-4 border-white shadow-md rounded overflow-hidden">
                <img src="/lovable-uploads/057c4d23-f52f-4405-8d04-d9226dea839d.png" alt="School support program" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="mb-4 leading-relaxed">
                The foundation provides ongoing support to underprivileged schools across Bangladesh, 
                offering educational materials, infrastructure improvements, and teacher training programs. 
                Our goal is to enhance the quality of education available to children from disadvantaged 
                backgrounds.
              </p>
              <p className="mb-4 leading-relaxed">
                Additionally, we work with nursing homes and elder care facilities, providing both material 
                support and organizing cultural activities to enrich the lives of elderly residents. This 
                intergenerational program brings together youth volunteers and seniors to share stories, 
                skills, and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COVID Relief */}
      <section ref={covidRef} id="covid" className="py-20">
        <div className="container">
          <div className="flex items-center mb-8">
            <Heart className="text-baft-gold w-8 h-8 mr-4" />
            <h2 className="text-3xl font-playfair font-semibold heading-decoration">
              COVID-19 Relief Initiatives
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="mb-4 leading-relaxed">
                In response to the COVID-19 pandemic, the foundation launched several relief initiatives 
                to support affected communities. These included distributing food packages to families 
                who lost income, providing personal protective equipment (PPE) to healthcare workers, and 
                offering small business recovery grants.
              </p>
              <p className="leading-relaxed">
                The foundation also organized awareness campaigns about COVID-19 prevention and vaccination, 
                reaching remote areas with limited access to healthcare information.
              </p>
            </div>
            <div className="relative">
              <div className="border-4 border-white shadow-md rounded overflow-hidden">
                <img src="/lovable-uploads/ba61021c-40ec-4122-bd0f-a942b3a38c0d.png" alt="Healthcare support program" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Report Section */}
      <section className="py-16 bg-baft-maroon text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-playfair font-semibold mb-2">
                Download Our Impact Report
              </h2>
              <p>
                Learn more about our work and the impact we've made over the years.
              </p>
            </div>
            <Button className="bg-white text-baft-maroon hover:bg-baft-cream flex items-center">
              <File className="w-5 h-5 mr-2" />
              <span>Download PDF Report</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsAndPrograms;

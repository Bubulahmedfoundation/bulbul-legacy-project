import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Award, Gift, File, Users, Heart, Calendar } from "lucide-react";
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
  return <>
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
          <CMSContentList collection="news" limit={6} title="Latest News & Updates" />
        </div>
      </section>

      {/* Press Releases - using CMS */}
      <section className="py-10 bg-baft-cream/30">
        <div className="container">
          <CMSContentList collection="press-releases" limit={6} title="Press Releases" />
        </div>
      </section>

      {/* Videos - using CMS */}
      <section className="py-20">
        <div className="container">
          <CMSContentList collection="videos" limit={6} title="Video Gallery" />
        </div>
      </section>

      {/* Upcoming Events */}
      

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

          {/* Award Recipients from CMS */}
          <CMSContentList collection="award-recipients" limit={8} title="Award Recipients" />
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
                <img alt="Refugee support program" className="w-full h-full object-cover" src="/lovable-uploads/921a794c-4647-4890-949d-055667698717.jpg" />
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
      
    </>;
};
export default NewsAndPrograms;
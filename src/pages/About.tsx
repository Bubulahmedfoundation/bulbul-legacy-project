import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const careerImages = ["/lovable-uploads/9fb94e29-6ee4-4067-a70d-d4c5051c47cb.png", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000"];
  return <>
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-baft-cream/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 heading-decoration">
            About Us
          </h1>
          <p className="text-xl max-w-3xl">
            Learn about our foundation, our mission, and the people behind our efforts to preserve 
            Bulbul Ahmed's legacy while making a difference in communities across Bangladesh.
          </p>
        </div>
      </section>

      {/* Foundation Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-6 heading-decoration">
                Our Story
              </h2>
              <p className="mb-4 leading-relaxed">
                The Bulbul Ahmed Foundation Trust was established in 2015 by the family and friends of 
                the legendary Bangladeshi actor Bulbul Ahmed, who passed away in 2010. The foundation 
                was created to honor his memory and continue his lifelong commitment to arts, 
                culture, and humanitarian causes.
              </p>
              <p className="mb-4 leading-relaxed">Born on 4th September 1941, Bulbul Ahmed was one of Bangladesh's most versatile and beloved actors. His career spanned over four decades, during which he portrayed memorable characters in cinema, television, and theater. Beyond his artistic contributions, he was known for his philanthropic activities and support for social causes.</p>
              <p className="leading-relaxed">Today, the Bulbul Ahmed Foundation Trust works to preserve his cultural legacy while extending his humanitarian spirit through various programs focused on education, cultural preservation, and providing relief to communities in need.</p>
            </div>
            <div className="relative">
              <div className="border-8 border-white shadow-lg rounded overflow-hidden">
                <img src="/lovable-uploads/2e9a5905-d504-48d7-88f6-2ca462762cbc.png" alt="Bulbul Ahmed Portrait" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-baft-gold/20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key People */}
      <section className="py-20 bg-baft-cream/30">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration text-center">
            Leadership
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Daisy Ahmed */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="aspect-square rounded-lg overflow-hidden border-4 border-white shadow-md">
                  <img src="/lovable-uploads/cde9bbf0-bcc8-48c7-8d4a-da3ca68c99b7.png" alt="Daisy Ahmed" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-playfair font-semibold mb-2">Daisy Ahmed</h3>
                <p className="text-baft-maroon mb-4">Chairperson</p>
                <Separator className="mb-4" />
                <p className="leading-relaxed">
                  Daisy Ahmed, widow of the late Bulbul Ahmed, has led the foundation since its 
                  inception. With a background in education and cultural administration, she brings 
                  decades of experience to her role as Chairperson. Her vision and leadership have 
                  been instrumental in establishing the foundation as a respected cultural and 
                  humanitarian organization in Bangladesh.
                </p>
              </div>
            </div>
            
            {/* Tahsin Farzana */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="aspect-square rounded-lg overflow-hidden border-4 border-white shadow-md">
                  <img src="/lovable-uploads/c233c5e6-f861-4739-83a4-229a531b868c.png" alt="Tahsin Farzana Tilottoma" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-playfair font-semibold mb-2">Tahsin Farzana Tilottoma</h3>
                <p className="text-baft-maroon mb-4">General Secretary</p>
                <Separator className="mb-4" />
                <p className="leading-relaxed">
                  As General Secretary, Tahsin Farzana Tilottoma oversees the day-to-day operations 
                  of the foundation. With extensive experience in nonprofit management and community 
                  development, she has successfully expanded the foundation's reach and impact since 
                  joining in 2017. Her dedication to both preserving cultural heritage and providing 
                  humanitarian aid has been vital to the foundation's success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation's Work */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration text-center">
            Our Impact
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Senior Care */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img src="/lovable-uploads/777c0309-72f2-45fe-ab8e-ef4df1c05102.png" alt="Ramadan Senior Center Program" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Senior Care Support</h3>
              <p className="text-gray-600">
                Our dedicated programs at Golden Years Senior Daycare Center provide essential 
                support and care for elderly community members.
              </p>
            </div>

            {/* School Programs */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img src="/lovable-uploads/057c4d23-f52f-4405-8d04-d9226dea839d.png" alt="School Meal Program" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Education Support</h3>
              <p className="text-gray-600">
                Supporting young students through our educational initiatives and meal programs, 
                ensuring children have the resources they need to thrive.
              </p>
            </div>

            {/* Healthcare Support */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img src="/lovable-uploads/ba61021c-40ec-4122-bd0f-a942b3a38c0d.png" alt="Healthcare Support Program" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-playfair font-semibold">Healthcare Initiatives</h3>
              <p className="text-gray-600">
                Providing critical medical supplies and support to patients and healthcare 
                facilities across Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Images Carousel */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-playfair font-semibold mb-12 heading-decoration text-center">
            Remembering Bulbul Ahmed
          </h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {careerImages.map((image, index) => <CarouselItem key={index} className="pl-0">
                  <div className="border-8 border-white shadow-lg rounded overflow-hidden">
                    <img src={image} alt={`Bulbul Ahmed career moment ${index + 1}`} className="w-full h-[500px] object-contain" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2" />
              <CarouselNext />
            </div>
          </Carousel>
          
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="italic text-lg">
              "Art is the mirror that reflects society's soul. Through our cultural work, we preserve 
              not just memories, but identity and heritage for generations to come."
            </p>
            <p className="mt-4 text-baft-maroon font-medium">— Bulbul Ahmed (1940-2010)</p>
          </div>
        </div>
      </section>
    </>;
};
export default About;
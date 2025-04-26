
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Introduction = () => {
  return (
    <section id="introduction" className="py-28 bg-gradient-to-b from-baft-cream/30 to-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold heading-decoration">
              Our Impact
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Since 2015, the Bulbul Ahmed Foundation Trust has been dedicated to preserving 
              the cultural legacy of the renowned actor while making a real difference in 
              communities across Bangladesh through education, humanitarian aid, and artistic support.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our programs reach from senior care centers to schools, providing essential 
              support and fostering cultural growth through various initiatives.
            </p>
            <div className="pt-6">
              <Link to="/about">
                <Button className="bg-baft-maroon hover:bg-baft-maroon/90 text-lg group shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  Our Story
                  <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 relative animate-on-scroll">
            <div className="space-y-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img 
                    src="/lovable-uploads/76e461a8-c599-419e-b8d0-3358c6d4cb4f.png"
                    alt="Senior care program at Golden Years Center" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Senior Care Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Our work at Golden Years Senior Daycare Center, bringing support and dignity to the elderly.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img 
                    src="/lovable-uploads/77a638bc-7a3e-42cf-b3bc-cf77e7641b6d.png"
                    alt="School meal program" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">School Meal Program</h4>
                    <p className="text-sm text-muted-foreground">
                      Supporting young students through our educational and nutritional support initiatives.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="space-y-4 mt-8">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img 
                    src="/lovable-uploads/535b1ac0-c57f-4223-a49d-6babcd965bf8.png"
                    alt="Medical supply distribution" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Healthcare Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Distribution of medical supplies and healthcare support to communities in need.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img 
                    src="/lovable-uploads/ab477424-f4c8-478f-b729-dad0a950aff8.png"
                    alt="Memorial award ceremony" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Cultural Legacy</h4>
                    <p className="text-sm text-muted-foreground">
                      The Bulbul Ahmed Memorial Award ceremony, recognizing excellence in arts and culture.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-baft-gold/20 -z-10 rounded-full"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-baft-maroon/20 -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

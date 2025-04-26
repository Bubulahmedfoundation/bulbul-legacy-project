
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
              About the Foundation
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              The Bulbul Ahmed Foundation Trust (BAFT) was established in 2015 to honor the legacy of 
              the renowned Bangladeshi actor Bulbul Ahmed. Our mission extends beyond preserving his 
              cultural contributions to empowering future generations through education, 
              humanitarian relief, and artistic patronage.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Through our various programs and initiatives, we strive to make a positive impact 
              on communities across Bangladesh, particularly focusing on underprivileged 
              children, displaced populations, and preserving cultural heritage.
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
                    alt="Foundation's work at Golden Years Senior Daycare Center" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Community Outreach</h4>
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
                    alt="School outreach program" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Education Initiative</h4>
                    <p className="text-sm text-muted-foreground">
                      Supporting young students through our educational programs and meal distribution.
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
                    alt="Foundation's humanitarian work" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Humanitarian Aid</h4>
                    <p className="text-sm text-muted-foreground">
                      Distribution of essential supplies to communities in need.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img 
                    src="/lovable-uploads/945d586c-97f3-41bd-8ee2-71d614c5c220.png"
                    alt="BAFT Award presentation" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Cultural Legacy</h4>
                    <p className="text-sm text-muted-foreground">
                      The Bulbul Ahmed Memorial Award, recognizing excellence in arts and culture.
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

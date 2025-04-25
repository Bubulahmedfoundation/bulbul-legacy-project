
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
              the renowned Bangladeshi actor Bulbul Ahmed. Our mission is to preserve his 
              cultural contributions while empowering future generations through education, 
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
          <div className="relative animate-on-scroll">
            <div className="border-8 border-white shadow-xl rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000" 
                    alt="Foundation activities" 
                    className="w-full h-[500px] object-cover"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Making a Difference</h4>
                    <p className="text-sm text-muted-foreground">
                      Our initiatives have touched thousands of lives across Bangladesh through various humanitarian programs.
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

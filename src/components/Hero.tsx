
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>
      
      {/* Content */}
      <div className="container relative z-20 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
          Bulbul Ahmed Foundation Trust
        </h1>
        <div className="w-20 h-1 bg-baft-gold mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">
          Preserving a Legacy. Empowering Generations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/about">
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-base">
              Learn More
            </Button>
          </Link>
          <Link to="/get-involved#donate">
            <Button className="bg-baft-gold hover:bg-baft-gold/90 text-black text-base">
              Donate
            </Button>
          </Link>
          <Link to="/programs#awards">
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-base">
              Award Archive
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

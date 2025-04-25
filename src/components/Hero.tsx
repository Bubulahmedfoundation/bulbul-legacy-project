
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HandCoins, Award, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#introduction');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Changed to a darker overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>
      
      {/* Content - Improved spacing between elements */}
      <div className="container relative z-20 text-center text-white">
        <div className="space-y-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white drop-shadow-md">
            Bulbul Ahmed Foundation Trust
          </h1>
          <div className="w-24 h-1 bg-baft-gold mx-auto"></div>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-sm">
            Celebrating a Legend. Empowering Communities.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 text-lg group transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn About Bulbul
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
            <Link to="/get-involved#donate">
              <Button size="lg" className="bg-baft-gold hover:bg-baft-gold/90 text-black text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <HandCoins className="w-5 h-5" />
                Donate Now
              </Button>
            </Link>
            <Link to="/programs#awards">
              <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 text-lg flex items-center gap-2 shadow-lg hover:shadow-xl">
                <Award className="w-5 h-5" />
                Award Archive
              </Button>
            </Link>
          </div>
        </div>

        {/* Enhanced Scroll Indicator with animation */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white hover:text-baft-gold transition-colors flex flex-col items-center gap-2 animate-pulse"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium">Our Mission</span>
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

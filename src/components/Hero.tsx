
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HandCoins, Award, ArrowDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#introduction');
    nextSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Bulbul Ahmed Foundation Trust",
              "alternateName": "BAFT",
              "url": "https://bulbulahmeffoundationtrust.org",
              "logo": "https://bulbulahmeffoundationtrust.org/logo.png",
              "sameAs": [
                "https://www.facebook.com/BulbulAhmedFoundationTrust",
                "https://twitter.com/BAFT_org",
                "https://www.instagram.com/bulbulahmedfoundation"
              ],
              "description": "The Bulbul Ahmed Foundation Trust (BAFT) is dedicated to preserving the cultural legacy of the renowned actor while making a real difference in communities across Bangladesh through education, humanitarian aid, and artistic support."
            }
          `}
        </script>
      </Helmet>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Portrait Overlay */}
        <div className="absolute inset-0 z-10" style={{
        backgroundImage: "url('/lovable-uploads/81643c27-eed6-4405-ba78-6fe2e3186990.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} aria-hidden="true"></div>
        {/* Semi-transparent overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 z-20" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 animate-subtle-zoom" style={{
        backgroundImage: "url('/lovable-uploads/d80a5ee6-eab9-4a70-ad7b-5b9382e00d01.png')"
      }} aria-hidden="true"></div>
        
        {/* Content */}
        <div className="container relative z-30 text-center text-white">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block rounded-full p-1 px-4 bg-baft-gold/10 backdrop-blur-sm mb-4">
              <span className="text-baft-gold text-sm font-medium">Established 2015</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white drop-shadow-lg">
              <span lang="en">Bulbul Ahmed Foundation Trust</span>
              <span className="sr-only"> - </span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 opacity-90">
              <div className="h-[1px] w-12 bg-baft-gold"></div>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-white/90">
                <span lang="en">Celebrating a Legend. Empowering Communities.</span>
                <span className="sr-only"> - </span>
                <span lang="bn" className="block text-lg mt-1">
              </span>
              </p>
              <div className="h-[1px] w-12 bg-baft-gold"></div>
            </div>

            {/* Centered buttons with improved layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-4 mx-auto max-w-3xl">
              <Link to="/about" className="w-full md:w-auto">
                <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/5 hover:bg-white/15 text-lg group transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto">
                  Learn About Bulbul
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <Link to="/get-involved#donate" className="w-full md:w-auto">
                <Button size="lg" className="bg-baft-gold hover:bg-baft-gold/90 text-black text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto">
                  <HandCoins className="w-5 h-5" />
                  Donate Now
                </Button>
              </Link>
              <Link to="/programs#awards" className="w-full md:w-auto">
                <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/5 hover:bg-white/15 text-lg flex items-center gap-2 shadow-lg hover:shadow-xl w-full md:w-auto">
                  <Award className="w-5 h-5" />
                  Award Archive
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <button onClick={scrollToNext} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white hover:text-baft-gold transition-colors flex flex-col items-center gap-2 animate-bounce-slow" aria-label="Scroll to next section">
            <span className="text-sm font-medium tracking-wider uppercase">Our Mission</span>
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </section>
    </>;
};

export default Hero;

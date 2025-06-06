
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, ArrowDown } from "lucide-react";
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
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background layers */}
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
        <div className="container relative z-30 text-center text-white px-4 md:px-6 py-16">
          <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <div className="inline-block rounded-full p-1 px-4 bg-baft-gold/10 backdrop-blur-sm">
              <span className="text-baft-gold text-sm font-medium">Established 2015</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-white drop-shadow-lg my-4">
              <span lang="en">Bulbul Ahmed Foundation Trust</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-baft-gold hidden md:block"></div>
              <p className="text-xl md:text-2xl font-light text-white/90">
                <span lang="en">Celebrating a Legend. Empowering Communities.</span>
              </p>
              <div className="h-[1px] w-12 bg-baft-gold hidden md:block"></div>
            </div>

            {/* Responsive button layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8">
              <Link to="/about" className="w-full">
                <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/5 hover:bg-white/15 text-base md:text-lg group transition-all duration-300 shadow-lg hover:shadow-xl w-full h-12 md:h-14">
                  Learn About Bulbul
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              
              <Link to="/programs#awards" className="w-full">
                <Button variant="outline" size="lg" className="border-2 border-white text-white bg-white/5 hover:bg-white/15 text-base md:text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full h-12 md:h-14">
                  <Award className="w-5 h-5" />
                  Award Archive
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* "WHAT WE DO" section at bottom */}
        <div className="absolute z-30 bottom-8 md:bottom-16 w-full text-center">
          
        </div>
      </section>
    </>;
};
export default Hero;

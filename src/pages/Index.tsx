
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CallToAction from "@/components/CallToAction";
import AwardGallery from "@/components/AwardGallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HandCoins } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Bulbul Ahmed Foundation Trust (BAFT) | Celebrating a Legend, Empowering Communities</title>
        <meta name="description" content="The Bulbul Ahmed Foundation Trust (BAFT) preserves the legacy of legendary actor Bulbul Ahmed while supporting humanitarian causes across Bangladesh." />
        <meta name="keywords" content="Bulbul Ahmed, বুলবুল আহমেদ, Bulbul Ahmed Foundation Trust, BAFT, মহানায়ক বুলবুল আহমেদ, Bangladeshi actor, humanitarian organization, cultural heritage" />
        <link rel="canonical" href="https://bulbulahmefoundationtrust.org" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://bulbulahmefoundationtrust.org/",
              "name": "Bulbul Ahmed Foundation Trust",
              "alternateName": "BAFT",
              "description": "The Bulbul Ahmed Foundation Trust (BAFT) preserves the legacy of legendary actor Bulbul Ahmed while supporting humanitarian causes across Bangladesh.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bulbulahmefoundationtrust.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>
      <Hero />
      <Introduction />
      <CallToAction />
      <AwardGallery />
      
      {/* Donate Section */}
      <section className="py-24 bg-gradient-to-br from-baft-maroon to-baft-maroon/90 text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold">
              Support Our Mission
            </h2>
            <p className="text-xl leading-relaxed">
              Your contribution helps us continue our work in preserving cultural heritage
              and providing humanitarian support to those in need.
            </p>
            <Link to="/get-involved#donate">
              <Button size="lg" className="bg-white text-baft-maroon hover:bg-baft-cream text-lg px-8 py-6 group">
                <HandCoins className="w-5 h-5 mr-2" />
                Make a Donation
                <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

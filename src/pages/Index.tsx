
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Introduction />
      <CallToAction />
      
      {/* Donate Section */}
      <section className="py-20 bg-baft-maroon text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
            Support Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your contribution helps us continue our work in preserving cultural heritage
            and providing humanitarian support to those in need.
          </p>
          <Link to="/get-involved#donate">
            <Button className="bg-white text-baft-maroon hover:bg-baft-cream text-lg px-8 py-6">
              Make a Donation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;

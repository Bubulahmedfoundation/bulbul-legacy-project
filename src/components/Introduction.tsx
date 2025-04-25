
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="py-20 bg-baft-cream/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 heading-decoration">
              About the Foundation
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              The Bulbul Ahmed Foundation Trust (BAFT) was established in 2015 to honor the legacy of 
              the renowned Bangladeshi actor Bulbul Ahmed. Our mission is to preserve his 
              cultural contributions while empowering future generations through education, 
              humanitarian relief, and artistic patronage.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Through our various programs and initiatives, we strive to make a positive impact 
              on communities across Bangladesh, particularly focusing on underprivileged 
              children, displaced populations, and preserving cultural heritage.
            </p>
            <Link to="/about">
              <Button className="bg-baft-maroon hover:bg-baft-maroon/90">
                Our Story
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="border-8 border-white shadow-lg rounded overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000" 
                alt="Foundation activities" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-baft-gold/20 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-baft-maroon/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

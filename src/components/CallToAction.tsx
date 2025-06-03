
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Gift, Calendar } from "lucide-react";

const ctaItems = [
  {
    title: "Bulbul Ahmed Memorial Award",
    description: "Recognizing outstanding contributions to Bangladeshi arts and culture since 2016.",
    icon: Award,
    link: "/news-and-programs#awards"
  },
  {
    title: "Humanitarian Initiatives",
    description: "Providing relief and support to vulnerable communities throughout Bangladesh.",
    icon: Gift,
    link: "/news-and-programs#humanitarian"
  },
  {
    title: "Upcoming Events",
    description: "Join us for ceremonies, fundraisers, and cultural events throughout the year.",
    icon: Calendar,
    link: "/news-and-programs"
  }
];

const CallToAction = () => {
  return (
    <section className="py-20 bg-pattern">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6 mx-auto heading-decoration inline-block">
            Our Work
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explore the various initiatives and programs organized by the Bulbul Ahmed Foundation Trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ctaItems.map((item, index) => (
            <Link to={item.link} key={index} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-full bg-baft-maroon/10 flex items-center justify-center mb-4">
                    <item.icon className="text-baft-maroon h-6 w-6" />
                  </div>
                  <CardTitle className="font-playfair">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                  <div className="mt-6 text-baft-maroon font-medium group-hover:translate-x-1 transition-transform">
                    Learn more →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

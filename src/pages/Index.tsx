
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import CallToAction from "@/components/CallToAction";
import AwardGallery from "@/components/AwardGallery";

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
    </>
  );
};

export default Index;

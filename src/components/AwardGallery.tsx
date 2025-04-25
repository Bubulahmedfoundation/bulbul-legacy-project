
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const awardImages = [
  {
    src: "/lovable-uploads/ab477424-f4c8-478f-b729-dad0a950aff8.png",
    alt: "Award ceremony with distinguished guests in traditional attire"
  },
  {
    src: "/lovable-uploads/25595745-2bdf-455e-9687-5e3b829d4630.png",
    alt: "Award presentation ceremony with flowers"
  },
  {
    src: "/lovable-uploads/e1ad0b15-5a26-4bb4-b8e9-54c0be8338a2.png",
    alt: "Group award presentation"
  },
  {
    src: "/lovable-uploads/a7482b3d-f2fc-4a16-8195-1fa3caefba62.png",
    alt: "Indoor award presentation ceremony"
  }
];

const AwardGallery = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-playfair font-semibold mb-8">Award Ceremony Highlights</h3>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {awardImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <Card className="border-4 border-white shadow-lg">
                <CardContent className="p-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[300px] object-cover rounded"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default AwardGallery;

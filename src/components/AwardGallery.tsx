import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const awardImages = [{
  src: "/lovable-uploads/ab477424-f4c8-478f-b729-dad0a950aff8.png",
  alt: "Award ceremony with distinguished guests in traditional attire"
}, {
  src: "/lovable-uploads/25595745-2bdf-455e-9687-5e3b829d4630.png",
  alt: "Award presentation ceremony with flowers"
}, {
  src: "/lovable-uploads/e1ad0b15-5a26-4bb4-b8e9-54c0be8338a2.png",
  alt: "Group award presentation"
}, {
  src: "/lovable-uploads/a7482b3d-f2fc-4a16-8195-1fa3caefba62.png",
  alt: "Indoor award presentation ceremony"
}];
const recentRecipients = [{
  src: "/lovable-uploads/813bb885-401a-4620-91d9-40164698408f.png",
  alt: "Award presentation with family members"
}, {
  src: "/lovable-uploads/f41b6450-eda7-4f12-bd30-2ed187cad3e5.png",
  alt: "Award ceremony with distinguished guests"
}, {
  src: "/lovable-uploads/dd2109b9-97e8-45d9-b868-71d07c4639f6.png",
  alt: "Award presentation at formal ceremony"
}, {
  src: "/lovable-uploads/3db76396-e449-4356-97ee-b05c2796454a.png",
  alt: "Award ceremony with foundation representatives"
}];
const AwardGallery = () => {
  return <div className="w-full">
      <h3 className="text-2xl font-playfair font-semibold mb-8">Award Ceremony Highlights</h3>
      <Carousel className="w-full max-w-5xl mx-auto mb-12">
        <CarouselContent>
          {awardImages.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <Card className="border-4 border-white shadow-lg">
                <CardContent className="p-0">
                  <img src={image.src} alt={image.alt} className="w-full h-[300px] object-cover rounded" />
                </CardContent>
              </Card>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <h3 className="text-2xl font-playfair font-semibold mb-8">Recent Recipients</h3>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {recentRecipients.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <Card className="border-4 border-white shadow-lg">
                <CardContent className="p-0">
                  <img src={image.src} alt={image.alt} className="w-full h-[300px] object-cover rounded" />
                </CardContent>
              </Card>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex mx-0 text-lg" />
      </Carousel>
    </div>;
};
export default AwardGallery;
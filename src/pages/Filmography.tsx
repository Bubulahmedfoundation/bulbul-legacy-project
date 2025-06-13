import { useState } from "react";
import { Film } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const films = [
  {
    id: 1,
    title: "Shimana Periye",
    year: 1977,
    videoUrl: "https://www.youtube.com/embed/7oUZpPEG8Zw",
  },
  {
    id: 2,
    title: "Badhu Biday",
    year: 1978,
    videoUrl: "https://www.youtube.com/embed/8XyDvGrfi-g",
  },
  {
    id: 12,
    title: "Rupali Soikote",
    year: 1979,
    videoUrl: "https://www.youtube.com/embed/smGSt_9khIk",
  },
  {
    id: 3,
    title: "Shesh Uttar",
    year: 1980,
    videoUrl: "https://www.youtube.com/embed/-00wuAQLEGs",
  },
  {
    id: 11,
    title: "Bhalo Manush",
    year: 1981,
    videoUrl: "https://www.youtube.com/embed/y_pWq63g6Jg",
  },
  {
    id: 4,
    title: "Rajlokkhi Srikanto",
    year: 1987,
    videoUrl: "https://www.youtube.com/embed/RZi9F4WrvhM",
  },
  {
    id: 5,
    title: "Devdas",
    year: 1982,
    videoUrl: "https://www.youtube.com/embed/eXyvOiueq4g",
  },
  {
    id: 6,
    title: "Mahanayak",
    year: 1985,
    videoUrl: "https://www.youtube.com/embed/gAe1f3B7_iI",
  },
  {
    id: 7,
    title: "Dipu Number 2",
    year: 1996,
    videoUrl: "https://www.youtube.com/embed/-zz7T8waQbI",
  },
  {
    id: 8,
    title: "The Father",
    year: 1979,
    videoUrl: "https://www.youtube.com/embed/bF9UeoRRVtw",
  },
  {
    id: 10,
    title: "Surrender",
    year: 1987,
    videoUrl: "https://www.youtube.com/embed/u6ZjA3dOzps",
  },
];

const VideoCard = ({ title, year, videoUrl }: { title: string; year: number; videoUrl: string }) => (
  <Card className="overflow-hidden h-full">
    <CardContent className="p-0 flex flex-col">
      <div className="aspect-video">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4">
        <h3 className="font-playfair text-xl font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{year}</p>
      </div>
    </CardContent>
  </Card>
);

const Filmography = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  
  const filmsByDecade = {
    "all": films,
    "1970s": films.filter(film => film.year >= 1970 && film.year < 1980),
    "1980s": films.filter(film => film.year >= 1980 && film.year < 1990),
    "1990s": films.filter(film => film.year >= 1990 && film.year < 2000),
  };

  return (
    <div className="bg-baft-lightgray py-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-baft-maroon heading-decoration">
            Bulbul Ahmed's Filmography
          </h1>
          <p className="text-lg md:text-xl text-baft-darkgray mb-8">
            Explore the legendary films of Bulbul Ahmed, one of Bangladesh's most iconic actors.
          </p>
        </div>

        <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" className="text-lg">All Films</TabsTrigger>
              <TabsTrigger value="1970s" className="text-lg">1970s</TabsTrigger>
              <TabsTrigger value="1980s" className="text-lg">1980s</TabsTrigger>
              <TabsTrigger value="1990s" className="text-lg">1990s</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(filmsByDecade).map(([decade, decadeFilms]) => (
            <TabsContent key={decade} value={decade} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {decadeFilms.map((film) => (
                  <div key={film.id}>
                    <VideoCard
                      title={film.title}
                      year={film.year}
                      videoUrl={film.videoUrl}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="max-w-2xl mx-auto mt-16 text-center bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Film className="text-baft-gold h-8 w-8 mr-2" />
            <h2 className="text-2xl font-playfair font-semibold">Film Legacy</h2>
          </div>
          <p className="text-baft-darkgray">
            Bulbul Ahmed starred in over 200 films during his illustrious career spanning more than four decades. 
            His contributions to Bengali cinema earned him numerous accolades, including the National Film Award.
            The films showcased here represent some of his most memorable performances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filmography;

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "photo-1470071459604-3b5ec3a7fe05",
    title: "Transform Rural Societies Through Education",
    description: "Creating a climate conducive to learning, where both teachers and students thrive."
  },
  {
    image: "photo-1469474968028-56623f02e42e",
    title: "Excellence in Education",
    description: "Providing quality education with modern facilities and experienced faculty."
  },
  {
    image: "photo-1482938289607-e9573fc25ebb",
    title: "Holistic Development",
    description: "Focus on academic excellence, character building, and extra-curricular activities."
  }
];

const Hero = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] w-full">
                <img
                  src={`https://source.unsplash.com/${slide.image}`}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40">
                  <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-3xl text-white animate-fade-in">
                      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-8 text-white/90">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                          Explore Our Branches
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;
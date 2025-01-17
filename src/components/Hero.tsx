import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Transform Rural Societies Through Education
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            At Sunrise Edu Hub, we create a climate conducive to learning, where both teachers and students eagerly anticipate their return after holidays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Our Branches
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
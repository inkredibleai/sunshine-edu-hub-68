import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useEffect, useState } from "react";

const footerImages = [
  "photo-1506744038136-46273834b3fb",
  "photo-1500375592092-40eb2168fd21",
  "photo-1487887235947-a955ef187fcc"
];

const Footer = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.next();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <footer className="bg-primary text-white">
      <div className="h-40 overflow-hidden">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {footerImages.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={`https://source.unsplash.com/${image}`}
                  alt="Campus life"
                  className="w-full h-40 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>Nechhwa, Sikar, Rajasthan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>info@sunriseeduhub.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#branches" className="hover:underline">Our Branches</a></li>
              <li><a href="#facilities" className="hover:underline">Facilities</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Sunrise Edu Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
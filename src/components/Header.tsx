import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-[40px] left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="Sunrise Edu Hub Logo" className="h-10 w-auto" />
          <span className="font-heading font-semibold text-xl text-primary hidden sm:inline">Sunrise Edu Hub</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          <a href="#branches" className="text-sm font-medium hover:text-primary transition-colors">Our Branches</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          <Button variant="default" className="bg-primary hover:bg-primary/90">Admissions Open</Button>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

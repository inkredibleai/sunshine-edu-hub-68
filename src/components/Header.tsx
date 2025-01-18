import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="Prince Edu Hub Logo" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-xl text-primary hidden sm:inline">Prince Edu Hub</span>
              <span className="text-sm text-gray-600 hidden sm:inline">Schools | Coachings | Colleges</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">HOME</a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>ABOUT US</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px]">
                      <NavigationMenuLink href="#vision">Vision & Mission</NavigationMenuLink>
                      <NavigationMenuLink href="#team">Our Team</NavigationMenuLink>
                      <NavigationMenuLink href="#history">History</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>INSTITUTIONS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px]">
                      <NavigationMenuLink href="/school">Schools</NavigationMenuLink>
                      <NavigationMenuLink href="/college">Colleges</NavigationMenuLink>
                      <NavigationMenuLink href="/coaching">Coaching Centers</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">COURSES</a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>ADMISSIONS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px]">
                      <NavigationMenuLink href="#process">Admission Process</NavigationMenuLink>
                      <NavigationMenuLink href="#fees">Fee Structure</NavigationMenuLink>
                      <NavigationMenuLink href="#scholarships">Scholarships</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>RESULTS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px]">
                      <NavigationMenuLink href="#academic">Academic Results</NavigationMenuLink>
                      <NavigationMenuLink href="#competitive">Competitive Exams</NavigationMenuLink>
                      <NavigationMenuLink href="#achievements">Achievements</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#alumni" className="text-sm font-medium hover:text-primary transition-colors">ALUMNI</a>
            <a href="#jobs" className="text-sm font-medium hover:text-primary transition-colors">JOBS</a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">HELP DESK</Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
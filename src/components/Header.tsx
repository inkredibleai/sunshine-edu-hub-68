import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1e2a4a] text-white backdrop-blur-sm z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="Sunrise Edu Group Logo" className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-xl text-white hidden sm:inline">Sunrise Edu Group</span>
              <span className="text-sm text-gray-300 hidden sm:inline">Schools | Coachings | Colleges</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">HOME</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white bg-transparent hover:bg-white/10">ABOUT US</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white">
                      <Link to="#vision" className="text-sm font-medium text-gray-700 hover:text-primary">Vision & Mission</Link>
                      <Link to="#team" className="text-sm font-medium text-gray-700 hover:text-primary">Our Team</Link>
                      <Link to="#history" className="text-sm font-medium text-gray-700 hover:text-primary">History</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white bg-transparent hover:bg-white/10">INSTITUTIONS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white">
                      <Link to="/school" className="text-sm font-medium text-gray-700 hover:text-primary">Schools</Link>
                      <Link to="/college" className="text-sm font-medium text-gray-700 hover:text-primary">Colleges</Link>
                      <Link to="/coaching" className="text-sm font-medium text-gray-700 hover:text-primary">Coaching Centers</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/courses" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">COURSES</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white bg-transparent hover:bg-white/10">ADMISSIONS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white">
                      <Link to="#process" className="text-sm font-medium text-gray-700 hover:text-primary">Admission Process</Link>
                      <Link to="#fees" className="text-sm font-medium text-gray-700 hover:text-primary">Fee Structure</Link>
                      <Link to="#scholarships" className="text-sm font-medium text-gray-700 hover:text-primary">Scholarships</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white bg-transparent hover:bg-white/10">RESULTS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white">
                      <Link to="#academic" className="text-sm font-medium text-gray-700 hover:text-primary">Academic Results</Link>
                      <Link to="#competitive" className="text-sm font-medium text-gray-700 hover:text-primary">Competitive Exams</Link>
                      <Link to="#achievements" className="text-sm font-medium text-gray-700 hover:text-primary">Achievements</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white bg-transparent hover:bg-white/10">FACILITIES</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white">
                      <Link to="#infrastructure" className="text-sm font-medium text-gray-700 hover:text-primary">Infrastructure</Link>
                      <Link to="#library" className="text-sm font-medium text-gray-700 hover:text-primary">Library</Link>
                      <Link to="#labs" className="text-sm font-medium text-gray-700 hover:text-primary">Labs</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/alumni" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">ALUMNI NETWORK</Link>
            <Link to="/jobs" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">JOBS</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white bg-transparent hover:bg-white/10">HELP DESK</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px] bg-white">
                      <Link to="#contact" className="text-sm font-medium text-gray-700 hover:text-primary">Contact Us</Link>
                      <Link to="#faq" className="text-sm font-medium text-gray-700 hover:text-primary">FAQs</Link>
                      <Link to="#support" className="text-sm font-medium text-gray-700 hover:text-primary">Support</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
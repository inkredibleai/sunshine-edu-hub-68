import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Marquee from "./Marquee";
import Footer from "./Footer";

interface BranchLayoutProps {
  title: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  children: React.ReactNode;
}

const BranchLayout = ({
  title,
  heroImage,
  heroTitle,
  heroDescription,
  children
}: BranchLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Marquee />
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src={`https://source.unsplash.com/${heroImage}`}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <Button
                variant="ghost"
                className="mb-6 group text-white"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back
              </Button>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                {heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                {heroDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default BranchLayout;
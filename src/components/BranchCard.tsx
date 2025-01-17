import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface BranchCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const BranchCard = ({ title, description, icon, link }: BranchCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300">
      <img src={icon} alt={title} className="w-12 h-12 mb-4" />
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        variant="ghost" 
        className="group"
        onClick={() => navigate(link)}
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default BranchCard;
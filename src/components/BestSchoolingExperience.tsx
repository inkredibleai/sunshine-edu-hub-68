import { Card, CardContent } from "@/components/ui/card";
import { Star, Smile, Sun, Heart } from "lucide-react";

const BestSchoolingExperience = () => {
  const experiences = [
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Academic Excellence",
      description: "Our students consistently achieve outstanding results in board examinations and competitive tests."
    },
    {
      icon: <Smile className="w-12 h-12 text-green-500" />,
      title: "Holistic Development",
      description: "We focus on both academic and personal growth through various co-curricular activities."
    },
    {
      icon: <Sun className="w-12 h-12 text-orange-500" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities including smart classrooms, labs, and sports facilities."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Student Support",
      description: "Dedicated mentoring and counseling services to help students achieve their full potential."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-4">Best Schooling Experience with Sunrise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          At Sunrise, we create an environment where learning is enjoyable and students thrive academically and personally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0">{exp.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{exp.title}</h3>
                    <p className="text-gray-600 text-center md:text-left">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSchoolingExperience;
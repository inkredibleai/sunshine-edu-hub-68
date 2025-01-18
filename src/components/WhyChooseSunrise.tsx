import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Trophy, BookOpen, Target, Heart } from "lucide-react";

const WhyChooseSunrise = () => {
  const reasons = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal teacher-student ratio"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: "Proven Track Record",
      description: "Consistent academic excellence and outstanding results"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: "Modern Curriculum",
      description: "Updated teaching methods and comprehensive study material"
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Focus on Growth",
      description: "Emphasis on overall development and practical learning"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Nurturing Environment",
      description: "Safe and supportive atmosphere for learning and growth"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Why Choose Sunrise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSunrise;
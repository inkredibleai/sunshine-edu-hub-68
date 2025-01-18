import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const TopSelections = () => {
  const selections = [
    {
      title: "IIT JEE 2023",
      student: "Rahul Sharma",
      rank: "AIR 145",
      image: "/placeholder.svg"
    },
    {
      title: "NEET 2023",
      student: "Priya Patel",
      rank: "AIR 234",
      image: "/placeholder.svg"
    },
    {
      title: "UPSC 2023",
      student: "Amit Kumar",
      rank: "AIR 89",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Top Selections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selections.map((selection, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
                  <img src={selection.image} alt={selection.student} className="w-24 h-24 rounded-full mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{selection.title}</h3>
                  <p className="text-gray-600 mb-2">{selection.student}</p>
                  <p className="text-primary font-semibold">{selection.rank}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelections;
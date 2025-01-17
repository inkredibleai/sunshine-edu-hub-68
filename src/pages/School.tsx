import BranchLayout from "@/components/BranchLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Trophy, Building2 } from "lucide-react";

const School = () => {
  const facilities = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art classrooms and laboratories"
    },
    {
      icon: <Book className="w-8 h-8 text-primary" />,
      title: "Library",
      description: "Extensive collection of books and digital resources"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Small Class Sizes",
      description: "Personalized attention for each student"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Sports Facilities",
      description: "Multiple sports grounds and indoor facilities"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "The school has provided an excellent learning environment for my child.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Alumni",
      content: "The values and education I received here shaped my future.",
      rating: 5
    }
  ];

  return (
    <BranchLayout
      title="International Public School"
      heroImage="photo-1503676260728-1c00da094a0b"
      heroTitle="Welcome to International Public School"
      heroDescription="Nurturing young minds with quality education and values"
    >
      {/* About Section */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">About Our School</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose prose-lg">
            <p>
              Our International Public School provides quality English medium education
              for students from Kindergarten through Grade 12. We focus on delivering
              a holistic educational experience that prepares students for global
              opportunities while maintaining strong cultural values.
            </p>
          </div>
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="font-heading text-xl font-semibold mb-4">Key Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>CBSE-aligned curriculum</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>International teaching methodologies</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Digital smart classrooms</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <Card key={facility.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">{facility.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Trophy key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Admission Section */}
      <section>
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Admission Process</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Admissions are open throughout the academic year, subject to seat
            availability. The admission process includes:
          </p>
          <ol className="list-decimal pl-6">
            <li>Submission of application form</li>
            <li>Entrance assessment test</li>
            <li>Parent and student interview</li>
            <li>Previous academic records review</li>
          </ol>
        </div>
      </section>
    </BranchLayout>
  );
};

export default School;
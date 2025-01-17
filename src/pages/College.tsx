import BranchLayout from "@/components/BranchLayout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, Users, Building2 } from "lucide-react";

const College = () => {
  const facilities = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Modern Campus",
      description: "State-of-the-art classrooms, labs, and research facilities"
    },
    {
      icon: <Book className="w-8 h-8 text-primary" />,
      title: "Digital Library",
      description: "Extensive collection of books, journals, and online resources"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Expert Faculty",
      description: "Experienced professors and industry experts"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Placement Cell",
      description: "Dedicated career guidance and placement support"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Alumni",
      content: "The college provided me with excellent opportunities for growth and learning.",
      rating: 5
    },
    {
      name: "Priya Singh",
      role: "Current Student",
      content: "The faculty and infrastructure here are outstanding.",
      rating: 5
    }
  ];

  return (
    <BranchLayout
      title="College of Higher Education"
      heroImage="photo-1523050854058-8df90110c9f1"
      heroTitle="Welcome to Sunrise College"
      heroDescription="Empowering students with quality higher education and industry-ready skills"
    >
      {/* About Section */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">About Our College</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose prose-lg">
            <p>
              Our College of Higher Education offers comprehensive undergraduate and
              postgraduate programs designed to prepare students for successful careers.
              With state-of-the-art facilities and experienced faculty, we provide
              an enriching learning environment.
            </p>
          </div>
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="font-heading text-xl font-semibold mb-4">Key Highlights</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Industry-aligned curriculum</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Research opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>International collaborations</span>
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

      {/* Programs Section */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">Undergraduate Programs</h3>
              <ul className="space-y-2">
                <li>Bachelor of Arts (BA)</li>
                <li>Bachelor of Science (BSc)</li>
                <li>Bachelor of Commerce (BCom)</li>
                <li>Bachelor of Business Administration (BBA)</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-heading text-xl font-semibold mb-4">Postgraduate Programs</h3>
              <ul className="space-y-2">
                <li>Master of Arts (MA)</li>
                <li>Master of Science (MSc)</li>
                <li>Master of Commerce (MCom)</li>
                <li>Master of Business Administration (MBA)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-16">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <GraduationCap key={i} className="w-5 h-5 text-yellow-500" />
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
            Join our college and embark on a journey of academic excellence. The admission
            process includes:
          </p>
          <ol className="list-decimal pl-6">
            <li>Online application submission</li>
            <li>Academic record verification</li>
            <li>Entrance examination</li>
            <li>Personal interview</li>
          </ol>
        </div>
      </section>
    </BranchLayout>
  );
};

export default College;
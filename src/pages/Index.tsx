import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BranchCard from "@/components/BranchCard";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Book, Users, Trophy, Building2, Laptop } from "lucide-react";
import Marquee from "@/components/Marquee";
import Notifications from "@/components/Notifications";
import Footer from "@/components/Footer";

const Index = () => {
  const branches = [
    {
      title: "International Public School",
      description: "Quality English medium education for K-12 students with focus on holistic development.",
      icon: "/placeholder.svg",
      link: "/school",
    },
    {
      title: "College for Higher Studies",
      description: "Undergraduate and postgraduate programs with industry-relevant curriculum.",
      icon: "/placeholder.svg",
      link: "/college",
    },
    {
      title: "IIT/JEE/NEET Foundation",
      description: "Expert coaching for engineering and medical entrance examinations.",
      icon: "/placeholder.svg",
      link: "/coaching",
    },
    {
      title: "College for Pharmacy",
      description: "Comprehensive pharmacy education with state-of-the-art facilities.",
      icon: "/placeholder.svg",
      link: "/pharmacy",
    },
    {
      title: "Military Exam Training",
      description: "Specialized training for Sainik School and military institution entrance exams.",
      icon: "/placeholder.svg",
      link: "/military",
    },
    {
      title: "Kids Care",
      description: "Early childhood education and care in a nurturing environment.",
      icon: "/placeholder.svg",
      link: "/kidscare",
    },
  ];

  const benefits = [
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      title: "Comprehensive Curriculum",
      description: "Balanced academic program focusing on both theoretical knowledge and practical skills",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: "Track Record of Excellence",
      description: "Consistent outstanding results in academics and competitive exams",
    },
  ];

  const facilities = [
    {
      icon: <Building2 className="w-8 h-8 text-purple-600" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art classrooms, laboratories, and sports facilities",
    },
    {
      icon: <Laptop className="w-8 h-8 text-indigo-600" />,
      title: "Digital Learning",
      description: "Smart classrooms equipped with latest educational technology",
    },
    {
      icon: <Star className="w-8 h-8 text-pink-600" />,
      title: "Extra-Curricular Activities",
      description: "Wide range of sports, cultural, and skill development programs",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent",
      content: "The dedication of teachers at Sunrise Edu Hub is remarkable. My child has shown tremendous improvement in both academics and personality development.",
      rating: 5,
    },
    {
      name: "Rahul Verma",
      role: "Alumni",
      content: "The coaching I received for JEE helped me secure a seat in a premier engineering college. The faculty's guidance was invaluable.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      role: "Current Student",
      content: "The learning environment here is excellent. The mix of traditional and modern teaching methods makes learning engaging and effective.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Marquee />
      <Header />
      <main>
        <Hero />
        
        {/* Two Column Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Column */}
              <div className="space-y-6">
                <h2 className="font-heading text-3xl font-bold text-primary">About Sunrise Edu Hub</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-600">
                    Sunrise Edu Hub is a leading educational institution committed to transforming rural societies through quality education. With a legacy of excellence, we provide comprehensive education from school to college level, including specialized courses in pharmacy, military preparation, and competitive exam coaching.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Our mission is to empower students with knowledge, skills, and values that enable them to excel in their chosen fields and contribute meaningfully to society. Through innovative teaching methods, experienced faculty, and state-of-the-art facilities, we create an environment that nurtures learning and growth.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-600">
                    <li>✓ Comprehensive educational programs</li>
                    <li>✓ Experienced and dedicated faculty</li>
                    <li>✓ Modern infrastructure and facilities</li>
                    <li>✓ Focus on holistic development</li>
                    <li>✓ Strong track record of student success</li>
                  </ul>
                </div>
              </div>
              
              {/* Latest Updates Column */}
              <div>
                <Notifications />
              </div>
            </div>
          </div>
        </section>

        <section id="branches" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Educational Branches</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of educational institutions designed to nurture talent and foster excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch) => (
                <BranchCard key={branch.title} {...branch} />
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience excellence in education with our unique advantages
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <h3 className="font-heading text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="facilities" className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Our Facilities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                State-of-the-art infrastructure and amenities for holistic development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilities.map((facility) => (
                <Card key={facility.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{facility.icon}</div>
                    <h3 className="font-heading text-xl font-semibold mb-3">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">What People Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from our students, parents, and alumni about their experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

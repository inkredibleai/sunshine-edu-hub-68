import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BranchCard from "@/components/BranchCard";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Book, Users, Trophy, Building2, Laptop, GraduationCap, Award } from "lucide-react";
import Marquee from "@/components/Marquee";
import Notifications from "@/components/Notifications";
import Footer from "@/components/Footer";
import CBSEResults from "@/components/CBSEResults";
import WhyChooseSunrise from "@/components/WhyChooseSunrise";
import BestSchoolingExperience from "@/components/BestSchoolingExperience";

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

  const statistics = [
    { number: "10,000+", label: "Students", icon: <Users className="w-8 h-8 text-blue-600" /> },
    { number: "500+", label: "Faculty Members", icon: <GraduationCap className="w-8 h-8 text-green-600" /> },
    { number: "95%", label: "Success Rate", icon: <Trophy className="w-8 h-8 text-yellow-600" /> },
    { number: "50+", label: "Awards", icon: <Award className="w-8 h-8 text-purple-600" /> },
  ];

  const topSelections = [
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

  const newsArticles = [
    {
      title: "New Campus Inauguration",
      date: "Feb 15, 2024",
      excerpt: "State-of-the-art facility opened to accommodate growing student body",
      image: "/placeholder.svg"
    },
    {
      title: "National Science Exhibition",
      date: "Feb 10, 2024",
      excerpt: "Our students won first prize in the National Science Exhibition",
      image: "/placeholder.svg"
    },
    {
      title: "Industry Partnership",
      date: "Feb 5, 2024",
      excerpt: "New collaboration with leading tech companies for student placements",
      image: "/placeholder.svg"
    }
  ];

  const facilities = [
    { 
      title: "Classrooms",
      description: "Spacious and well-equipped classrooms with modern teaching aids to facilitate effective learning.",
      color: "bg-purple-100",
      textColor: "text-purple-600",
      icon: <Book className="w-8 h-8" />
    },
    {
      title: "Study Areas",
      description: "Quiet study areas and discussion rooms for group study sessions and collaborative learning.",
      color: "bg-blue-100",
      textColor: "text-blue-600",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Computer Center",
      description: "High-speed internet access and computing facilities for research, assignments, and project work.",
      color: "bg-teal-100",
      textColor: "text-teal-600",
      icon: <Laptop className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      
      {/* About and Latest Updates Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Section */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">About Sunrise Edu Group</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Sunrise Edu Group is a leading educational institution committed to providing quality education across various levels. With a legacy of excellence spanning over decades, we have consistently delivered outstanding academic results and holistic development opportunities to our students.
                </p>
                <p className="text-gray-600 mb-4">
                  Our comprehensive educational ecosystem includes schools, colleges, coaching centers, and specialized institutions, all working together to nurture talent and create future leaders.
                </p>
                <p className="text-gray-600">
                  We believe in combining traditional values with modern teaching methodologies to provide an education that prepares students for global challenges while keeping them rooted in their culture.
                </p>
              </div>
            </div>

            {/* Latest Updates Section */}
            <div className="h-full">
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">Latest Updates</h2>
              <div className="bg-white rounded-lg shadow-lg p-6 h-[calc(100%-4rem)]">
                <Notifications />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Sections */}
      <CBSEResults />
      <WhyChooseSunrise />
      <BestSchoolingExperience />

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-16 bg-gradient-to-b from-blue-50 to-white">
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

      <Footer />
    </div>
  );
};

export default Index;

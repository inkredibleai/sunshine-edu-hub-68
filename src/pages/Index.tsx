import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BranchCard from "@/components/BranchCard";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        
        <section id="branches" className="py-16 md:py-24 bg-gray-50">
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
      </main>
    </div>
  );
};

export default Index;
import BranchLayout from "@/components/BranchLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap, Users, Trophy, Award, Star, BookOpen, Laptop } from "lucide-react";

const Coaching = () => {
  const programs = [
    {
      title: "Pre-Foundation",
      description: "For Class 6th to 10th",
      color: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "IIT-JEE Foundation",
      subtitle: "(Main + Advanced)",
      description: "For Class 11th & 12th (Maths)",
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "NEET (UG) Foundation",
      description: "For Class 11th & 12th (Biology)",
      color: "bg-teal-100",
      textColor: "text-teal-600"
    },
    {
      title: "IIT-JEE Target",
      subtitle: "(Main + Advanced)",
      description: "For Class 12th (Maths) Passed",
      color: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "NEET (UG) Target",
      description: "For Class 12th (Biology) Passed",
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Sunrise Foundation Scholarship Test",
      description: "GSAT",
      color: "bg-teal-100",
      textColor: "text-teal-600"
    }
  ];

  const facilities = [
    { 
      title: "Classrooms",
      description: "Spacious and well-equipped classrooms with modern teaching aids to facilitate effective learning.",
      color: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "Study Areas",
      description: "Quiet study areas and discussion rooms for group study sessions and collaborative learning.",
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Computer Center",
      description: "High-speed internet access and computing facilities for research, assignments, and project work.",
      color: "bg-teal-100",
      textColor: "text-teal-600"
    },
    {
      title: "Hostel",
      description: "Comfortable and secure hostel accommodation with facilities for dining, recreation, and study.",
      color: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "Security",
      description: "24/7 security surveillance and personnel to ensure the safety and security of students and staff on campus.",
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Health Center",
      description: "Professional medical facilities and counseling services for physical and mental well-being.",
      color: "bg-teal-100",
      textColor: "text-teal-600"
    }
  ];

  const topRankers = [
    { name: "Student Name 1", rank: "AIR 145", year: "2023" },
    { name: "Student Name 2", rank: "AIR 234", year: "2023" },
    { name: "Student Name 3", rank: "AIR 89", year: "2023" },
  ];

  const faqs = [
    { question: "What are the admission criteria?", answer: "We have a merit-based admission process through entrance test and interview." },
    { question: "What is the batch size?", answer: "We maintain small batch sizes of 30-35 students for personalized attention." },
    { question: "Do you provide study material?", answer: "Yes, we provide comprehensive study material prepared by experts." },
  ];

  return (
    <BranchLayout
      title="Sunrise Foundation Classes"
      heroImage="photo-1513258496099-48168024aec0"
      heroTitle="Welcome to Sunrise Foundation Classes"
      heroDescription="Leading coaching institute for IIT-JEE and NEET preparation"
    >
      {/* Programs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">Explore Our Range of Programs</h2>
        <p className="text-center text-gray-600 mb-8">
          At Sunrise Foundation Classes, we are committed to providing high-quality education and comprehensive preparation for competitive exams.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className={`${program.color} border-none`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold ${program.textColor} mb-2`}>{program.title}</h3>
                {program.subtitle && <p className="text-gray-600 mb-2">{program.subtitle}</p>}
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Facilities</h2>
        <p className="text-center text-gray-600 mb-8">
          We are committed to providing our students with modern amenities and state-of-the-art facilities to support their academic journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className={`${facility.color} border-none`}>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold ${facility.textColor} mb-2`}>{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Phone Number" />
              </div>
              <div>
                <Textarea placeholder="Your Message" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Statistics Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">10,000+</h3>
              <p className="text-gray-600">Students</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-gray-600">Top Rankers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </BranchLayout>
  );
};

export default Coaching;

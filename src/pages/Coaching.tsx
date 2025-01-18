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
import { GraduationCap, Users, Trophy, Award, Star, BookOpen } from "lucide-react";

const Coaching = () => {
  const topRankers = [
    { name: "Student Name 1", rank: "AIR 145", year: "2023" },
    { name: "Student Name 2", rank: "AIR 234", year: "2023" },
    { name: "Student Name 3", rank: "AIR 89", year: "2023" },
  ];

  const facilities = [
    { icon: <BookOpen className="w-8 h-8" />, title: "Expert Faculty", description: "Experienced teachers dedicated to student success" },
    { icon: <Users className="w-8 h-8" />, title: "Small Batch Size", description: "Personalized attention for better learning" },
    { icon: <Star className="w-8 h-8" />, title: "Regular Tests", description: "Comprehensive assessment system" },
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
      {/* Top Rankers Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Top Achievers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topRankers.map((ranker, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <img src="/placeholder.svg" alt={ranker.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="font-semibold">{ranker.name}</h3>
                <p className="text-primary">{ranker.rank}</p>
                <p className="text-sm text-gray-600">{ranker.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center text-primary">{facility.icon}</div>
                <h3 className="font-semibold mb-2">{facility.title}</h3>
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
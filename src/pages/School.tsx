import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const School = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6 group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-primary mb-6">
            International Public School
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Our International Public School provides quality English medium education
              for students from Kindergarten through Grade 12. We focus on delivering
              a holistic educational experience that prepares students for global
              opportunities while maintaining strong cultural values.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
            <ul>
              <li>CBSE-aligned curriculum with international teaching methodologies</li>
              <li>Experienced faculty with international teaching certifications</li>
              <li>Well-equipped science and computer laboratories</li>
              <li>Digital smart classrooms for interactive learning</li>
              <li>Extensive sports facilities and cultural activities</li>
              <li>Regular parent-teacher interactions</li>
              <li>Focus on personality development and life skills</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Programs Offered</h2>
            <ul>
              <li>Primary School (Grades 1-5)</li>
              <li>Middle School (Grades 6-8)</li>
              <li>Secondary School (Grades 9-10)</li>
              <li>Senior Secondary (Grades 11-12)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Admission Process</h2>
            <p>
              Admissions are open throughout the academic year, subject to seat
              availability. The admission process includes:
            </p>
            <ol>
              <li>Submission of application form</li>
              <li>Entrance assessment test</li>
              <li>Parent and student interview</li>
              <li>Previous academic records review</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
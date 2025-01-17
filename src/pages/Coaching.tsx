import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Coaching = () => {
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
            IIT/JEE/NEET Foundation
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Our specialized coaching division provides comprehensive preparation for
              engineering and medical entrance examinations. With experienced faculty
              and proven teaching methodologies, we help students achieve their dreams
              of joining premier institutions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Programs</h2>
            <ul>
              <li>IIT-JEE Main & Advanced Preparation</li>
              <li>NEET-UG Preparation</li>
              <li>Foundation Courses (Class 9th & 10th)</li>
              <li>Crash Courses</li>
              <li>Distance Learning Programs</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
            <ul>
              <li>Concept-based learning methodology</li>
              <li>Regular mock tests and assessments</li>
              <li>Personalized attention and doubt clearing sessions</li>
              <li>Study material designed by experts</li>
              <li>Performance tracking and analysis</li>
              <li>Parent-teacher meetings</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
            <ul>
              <li>Experienced faculty from IITs and medical colleges</li>
              <li>Small batch sizes for better interaction</li>
              <li>Regular workshops and seminars</li>
              <li>Online test series</li>
              <li>Previous year paper discussion</li>
              <li>Stress management sessions</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Success Stories</h2>
            <p>
              Our institute has consistently produced top rankers in various competitive
              examinations. Our students have secured admissions in prestigious
              institutions like IITs, NITs, and top medical colleges across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Military = () => {
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
            Military Exam Training
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Our Military Exam Training program provides specialized preparation for
              Sainik School and military institution entrance exams. We focus on
              developing both physical fitness and academic excellence required for
              military careers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Programs Offered</h2>
            <ul>
              <li>Sainik School Entrance Exam Preparation</li>
              <li>NDA Preparation</li>
              <li>CDS Preparation</li>
              <li>AFCAT Preparation</li>
              <li>SSB Interview Training</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Training Components</h2>
            <ul>
              <li>Physical Training and Fitness</li>
              <li>Academic Preparation</li>
              <li>Personality Development</li>
              <li>Group Discussions</li>
              <li>Interview Preparation</li>
              <li>Leadership Training</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Facilities</h2>
            <ul>
              <li>Professional physical training ground</li>
              <li>Obstacle course</li>
              <li>Swimming pool</li>
              <li>Indoor sports facilities</li>
              <li>Mock SSB interview setup</li>
              <li>Library with study materials</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Expert Faculty</h2>
            <p>
              Our training team includes:
            </p>
            <ul>
              <li>Ex-servicemen from armed forces</li>
              <li>Experienced SSB trainers</li>
              <li>Subject matter experts</li>
              <li>Physical training instructors</li>
              <li>Psychological counselors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Military;
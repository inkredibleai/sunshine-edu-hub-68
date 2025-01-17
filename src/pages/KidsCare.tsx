import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const KidsCare = () => {
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
            Kids Care
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Our Kids Care program provides early childhood education and care in a
              nurturing environment. We focus on developing essential skills through
              play-based learning and structured activities.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Programs</h2>
            <ul>
              <li>Playgroup (1.5 - 2.5 years)</li>
              <li>Nursery (2.5 - 3.5 years)</li>
              <li>Junior KG (3.5 - 4.5 years)</li>
              <li>Senior KG (4.5 - 5.5 years)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
            <ul>
              <li>Play-based learning methodology</li>
              <li>Age-appropriate activities</li>
              <li>Focus on social and emotional development</li>
              <li>Regular parent communication</li>
              <li>Safe and hygienic environment</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Activities</h2>
            <ul>
              <li>Indoor and outdoor play</li>
              <li>Art and craft sessions</li>
              <li>Music and movement</li>
              <li>Story time</li>
              <li>Basic numeracy and literacy</li>
              <li>Physical activities</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Facilities</h2>
            <ul>
              <li>Child-friendly classrooms</li>
              <li>Safe play equipment</li>
              <li>Learning materials and toys</li>
              <li>First aid facilities</li>
              <li>CCTV surveillance</li>
              <li>Trained staff and caregivers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsCare;
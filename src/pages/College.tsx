import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const College = () => {
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
            College for Higher Studies
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Our College for Higher Studies offers comprehensive undergraduate and
              postgraduate programs with an industry-relevant curriculum. We focus on
              providing quality education that prepares students for successful careers
              and further academic pursuits.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Programs Offered</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Undergraduate Programs</h3>
            <ul>
              <li>Bachelor of Arts (BA)</li>
              <li>Bachelor of Commerce (BCom)</li>
              <li>Bachelor of Science (BSc)</li>
              <li>Bachelor of Business Administration (BBA)</li>
              <li>Bachelor of Computer Applications (BCA)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Postgraduate Programs</h3>
            <ul>
              <li>Master of Arts (MA)</li>
              <li>Master of Commerce (MCom)</li>
              <li>Master of Science (MSc)</li>
              <li>Master of Business Administration (MBA)</li>
              <li>Master of Computer Applications (MCA)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Facilities</h2>
            <ul>
              <li>Modern classrooms with audio-visual equipment</li>
              <li>Well-stocked library with digital resources</li>
              <li>Computer labs with latest software and hardware</li>
              <li>Research facilities and laboratories</li>
              <li>Career guidance and placement cell</li>
              <li>Sports complex and gymnasium</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Campus Life</h2>
            <p>
              Our vibrant campus offers numerous opportunities for extracurricular
              activities, cultural events, and professional development through:
            </p>
            <ul>
              <li>Student clubs and societies</li>
              <li>Cultural festivals and events</li>
              <li>Sports tournaments</li>
              <li>Industry visits and internships</li>
              <li>Guest lectures and workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default College;
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Pharmacy = () => {
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
            College for Pharmacy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p>
              Our College of Pharmacy offers comprehensive pharmacy education with
              state-of-the-art facilities. We are committed to producing skilled
              pharmacy professionals through practical training and industry exposure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Programs Offered</h2>
            <ul>
              <li>Diploma in Pharmacy (D.Pharm)</li>
              <li>Bachelor of Pharmacy (B.Pharm)</li>
              <li>Master of Pharmacy (M.Pharm)</li>
              <li>Pharm.D (Doctor of Pharmacy)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Infrastructure</h2>
            <ul>
              <li>Modern pharmaceutical laboratories</li>
              <li>Machine room with latest equipment</li>
              <li>Medicinal plant garden</li>
              <li>Well-equipped research facilities</li>
              <li>Digital library with online journals</li>
              <li>Computer lab with pharmaceutical software</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Career Opportunities</h2>
            <ul>
              <li>Hospital and Clinical Pharmacy</li>
              <li>Pharmaceutical Industry</li>
              <li>Research and Development</li>
              <li>Drug Regulatory Affairs</li>
              <li>Community Pharmacy</li>
              <li>Academic Institutions</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Industry Collaboration</h2>
            <p>
              We have strong ties with leading pharmaceutical companies for:
            </p>
            <ul>
              <li>Industrial training</li>
              <li>Research projects</li>
              <li>Guest lectures</li>
              <li>Campus placements</li>
              <li>Industry visits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
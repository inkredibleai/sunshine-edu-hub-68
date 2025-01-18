import BranchLayout from "@/components/BranchLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Book, GraduationCap, Users, Trophy, ChartLine, Microscope, Atom, Award } from "lucide-react";

const Coaching = () => {
  return (
    <BranchLayout
      title="IIT/JEE/NEET Foundation"
      heroImage="photo-1513258496099-48168024aec0"
      heroTitle="Sunrise Foundation Classes"
      heroDescription="Empowering students to achieve their dreams through quality education and guidance"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Programs Section */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Atom className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">IIT-JEE (Main & Advanced)</h3>
                      <p className="text-gray-600">Comprehensive preparation for engineering entrance exams</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Microscope className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">NEET-UG</h3>
                      <p className="text-gray-600">Expert guidance for medical entrance preparation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Book className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">Foundation Courses</h3>
                      <p className="text-gray-600">For Class 9th & 10th students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <ChartLine className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">Crash Courses</h3>
                      <p className="text-gray-600">Intensive preparation programs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Concept-based learning methodology</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Regular mock tests and assessments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Personalized attention</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Study material by experts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Performance tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Parent-teacher meetings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Statistics Section */}
        <div className="space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Our Numbers</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">10,000+</p>
                      <p className="text-gray-600">Students Enrolled</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <GraduationCap className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">95%</p>
                      <p className="text-gray-600">Success Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Trophy className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">500+</p>
                      <p className="text-gray-600">Top Rankers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Award className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">15+</p>
                      <p className="text-gray-600">Years Experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </BranchLayout>
  );
};

export default Coaching;
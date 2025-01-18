import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const CBSEResults = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-8">Our CBSE Results</h2>
        <Tabs defaultValue="10th" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="10th">10th Board Results</TabsTrigger>
            <TabsTrigger value="12th">12th Board Results</TabsTrigger>
          </TabsList>
          <TabsContent value="10th">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-blue-600">98.5%</h3>
                    <p className="text-gray-600">Highest Score</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Trophy className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-green-600">85%</h3>
                    <p className="text-gray-600">Average Score</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-purple-600">100%</h3>
                    <p className="text-gray-600">Pass Percentage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="12th">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-blue-600">99.2%</h3>
                    <p className="text-gray-600">Highest Score</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Trophy className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-green-600">87%</h3>
                    <p className="text-gray-600">Average Score</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold text-purple-600">100%</h3>
                    <p className="text-gray-600">Pass Percentage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CBSEResults;
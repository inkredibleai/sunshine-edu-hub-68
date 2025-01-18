import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const LatestNews = () => {
  const newsArticles = [
    {
      title: "New Campus Inauguration",
      date: "Feb 15, 2024",
      excerpt: "State-of-the-art facility opened to accommodate growing student body",
      image: "/placeholder.svg"
    },
    {
      title: "National Science Exhibition",
      date: "Feb 10, 2024",
      excerpt: "Our students won first prize in the National Science Exhibition",
      image: "/placeholder.svg"
    },
    {
      title: "Industry Partnership",
      date: "Feb 5, 2024",
      excerpt: "New collaboration with leading tech companies for student placements",
      image: "/placeholder.svg"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      if (scrollElement.scrollTop + scrollElement.clientHeight >= scrollElement.scrollHeight) {
        scrollElement.scrollTop = 0;
      } else {
        scrollElement.scrollTop += 1;
      }
    };

    const intervalId = setInterval(scroll, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">Latest News & Updates</h2>
        <div 
          ref={scrollRef} 
          className="max-h-[400px] overflow-hidden"
        >
          <div className="space-y-4">
            {[...newsArticles, ...newsArticles].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img src={article.image} alt={article.title} className="w-24 h-24 object-cover rounded" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                      <p className="text-gray-600">{article.excerpt}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

import { MapPin, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ThingsToDoSection() {
  const attractions = [
    {
      name: "Lake Victoria",
      image: "/lovable-uploads/0b3a4eec-11ee-4207-ba8c-f40b132e72f5.png",
      description: "Africa's largest lake offering beautiful sunsets, boat rides, and fishing experiences.",
      distance: "15 minutes drive",
      rating: 4.8
    },
    {
      name: "Mega City Mall",
      image: "/lovable-uploads/0b3a4eec-11ee-4207-ba8c-f40b132e72f5.png",
      description: "Modern shopping mall with restaurants, cinema, and various retail stores.",
      distance: "10 minutes drive",
      rating: 4.5
    },
    {
      name: "Impala Sanctuary",
      image: "/lovable-uploads/0b3a4eec-11ee-4207-ba8c-f40b132e72f5.png",
      description: "Wildlife sanctuary home to impalas, hippos, and various bird species.",
      distance: "20 minutes drive",
      rating: 4.6
    },
    {
      name: "Kisumu Museum",
      image: "/lovable-uploads/0b3a4eec-11ee-4207-ba8c-f40b132e72f5.png",
      description: "Learn about the rich cultural heritage and history of the Luo community.",
      distance: "12 minutes drive",
      rating: 4.3
    },
    {
      name: "Dunga Hill Camp",
      image: "/lovable-uploads/0b3a4eec-11ee-4207-ba8c-f40b132e72f5.png",
      description: "Scenic camping site with panoramic views of Lake Victoria and boat rides.",
      distance: "18 minutes drive",
      rating: 4.7
    },
    {
      name: "Kit Mikayi Rock",
      image: "/lovable-uploads/0b3a4eec-11ee-4207-ba8c-f40b132e72f5.png",
      description: "Mystical rock formation with cultural significance and hiking trails.",
      distance: "25 minutes drive",
      rating: 4.4
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Things to Do Near Laville Suites</h2>
          <p className="text-xl text-gray-600">Discover the best attractions and activities around Kisumu</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{attraction.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{attraction.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-blue-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">{attraction.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Open daily</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

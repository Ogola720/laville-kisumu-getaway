
import { Calendar, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  images: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
  onCheckAvailabilityClick: () => void;
}

export function HeroSection({ 
  images, 
  selectedImage, 
  setSelectedImage, 
  onCheckAvailabilityClick 
}: HeroSectionProps) {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={images[selectedImage]} 
          alt="Laville Suites" 
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-600/90 text-white border-none">
            ⭐ 4.9 Rating • Memorable Home Stays
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            MEMORABLE<br />
            <span className="text-blue-400">HOME STAYS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Two Bedrooms • Fully Furnished<br />
            Westwinds Court - Arina Estate, Kisumu, Kenya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onCheckAvailabilityClick}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
              <Camera className="mr-2 h-5 w-5" />
              View Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              selectedImage === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

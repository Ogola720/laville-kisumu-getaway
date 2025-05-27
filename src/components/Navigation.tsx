
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onBookNowClick: () => void;
}

export function Navigation({ onBookNowClick }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-wider" style={{ fontFamily: 'serif' }}>LAVILLE SUITES</span>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('amenities')} className="text-gray-600 hover:text-blue-600 transition-colors">Amenities</button>
            <button onClick={() => scrollToSection('location')} className="text-gray-600 hover:text-blue-600 transition-colors">Location</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            <Button 
              onClick={onBookNowClick}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

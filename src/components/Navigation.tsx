
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onBookNowClick: () => void;
}

export function Navigation({ onBookNowClick }: NavigationProps) {
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
            <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</a>
            <a href="#amenities" className="text-gray-600 hover:text-blue-600 transition-colors">Amenities</a>
            <a href="#location" className="text-gray-600 hover:text-blue-600 transition-colors">Location</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
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

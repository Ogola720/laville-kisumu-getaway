
import { MapPin, Star, Users } from 'lucide-react';

export function LocationSection() {
  return (
    <section id="location" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Prime Location in Kisumu</h2>
          <p className="text-xl text-gray-600">Westwinds Court - Arina Estate, Off The Bypass</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/8c370fb5-cbb8-4161-99b8-3223756d2661.png" 
              alt="Scenic view from Laville Suites"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Location?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Strategic Location</h4>
                  <p className="text-gray-600">Located off the bypass for easy access to Kisumu city center and surrounding areas</p>
                </div>
              </div>
              <div className="flex items-start">
                <Star className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Secure Environment</h4>
                  <p className="text-gray-600">Gated community with 24/7 security for your peace of mind</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Family Friendly</h4>
                  <p className="text-gray-600">Quiet residential area perfect for families and business travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import { Wifi, Car, Coffee, Tv, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AmenitiesSection() {
  const amenities = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Car, label: 'Free Parking' },
    { icon: Tv, label: 'Smart TV' },
    { icon: Coffee, label: 'Kitchen' },
    { icon: Users, label: '4-6 Guests' },
  ];

  return (
    <section id="amenities" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Amenities & Features</h2>
          <p className="text-xl text-gray-600">Everything you need for a comfortable stay</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <amenity.icon className="h-8 w-8 text-blue-600" />
              </div>
              <p className="font-medium text-gray-900">{amenity.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Card className="p-8">
            <CardContent>
              <h3 className="text-2xl font-bold mb-6 text-center">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Fully furnished bedrooms with mosquito nets
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Modern living room with entertainment center
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Fully equipped kitchen with appliances
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    High-speed internet and Smart TV
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Secure parking space included
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    24/7 security in gated community
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Beautiful balcony with scenic views
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Professional cleaning service
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Calendar, MapPin, Star, Wifi, Car, Coffee, Tv, Users, Phone, Mail, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookingSection } from '@/components/BookingSection';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    '/lovable-uploads/fb85b116-b705-4760-a5d3-839b9f1d9b7e.png',
    '/lovable-uploads/c8ab92f1-6867-42c3-af33-c5e0c1235163.png',
    '/lovable-uploads/80708dd8-dcad-438d-a4d9-84435743d0bc.png',
    '/lovable-uploads/d60e344c-7504-4141-b534-14b7e9107380.png',
    '/lovable-uploads/fcbf17da-31b3-4d92-aa4c-c49e820b3528.png',
    '/lovable-uploads/82800a27-bdfc-4aa9-bcf5-518ef3c5d4e7.png',
    '/lovable-uploads/2b91247d-46da-4829-8d72-2a6e2e1b0b44.png',
    '/lovable-uploads/9e701cac-eca0-4b38-b995-48875eb280d8.png',
    '/lovable-uploads/76e31868-0208-4d81-af3a-d12d1be87a1f.png',
    '/lovable-uploads/8c370fb5-cbb8-4161-99b8-3223756d2661.png',
    '/lovable-uploads/c8393260-4546-45cb-b121-c67aadd1a6a1.png'
  ];

  const amenities = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Car, label: 'Free Parking' },
    { icon: Tv, label: 'Smart TV' },
    { icon: Coffee, label: 'Kitchen' },
    { icon: Users, label: '4-6 Guests' },
  ];

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LAVILLE Suites</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#gallery" className="text-gray-600 hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#amenities" className="text-gray-600 hover:text-blue-600 transition-colors">Amenities</a>
              <a href="#location" className="text-gray-600 hover:text-blue-600 transition-colors">Location</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <Button 
                onClick={scrollToBooking}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                onClick={scrollToBooking}
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

      {/* Quick Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2 Bedrooms</h3>
                <p className="text-gray-600">Comfortable accommodation for up to 6 guests</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
                <p className="text-gray-600">Westwinds Court, Arina Estate, Kisumu</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Fully furnished with modern amenities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Our Spaces</h2>
            <p className="text-xl text-gray-600">Beautiful, comfortable rooms designed for memorable stays</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3] hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`Laville Suites ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />

      {/* Amenities Section */}
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

      {/* Location Section */}
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

      {/* Contact & Booking Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Book Your Stay NOW!</h2>
            <p className="text-xl opacity-90">Experience memorable home stays at Laville Suites</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent>
                  <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 mr-3" />
                      <div>
                        <p className="font-semibold">Phone Numbers</p>
                        <p className="opacity-90">(+254) 726263281</p>
                        <p className="opacity-90">(+254) 732894577</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 mr-3" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="opacity-90">lavillesuites@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 mr-3" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="opacity-90">Westwinds Court - Arina Estate<br />Off The Bypass - KISUMU - KENYA</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-3xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Contact us directly to check availability and make your reservation
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-3">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (+254) 726263281
                  </Button>
                  <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600 text-lg py-3">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-2xl font-bold">LAVILLE Suites</span>
            </div>
            <p className="text-gray-400 mb-4">Creating memorable home stays in the heart of Kisumu, Kenya</p>
            <p className="text-sm text-gray-500">
              © 2024 Laville Suites. All rights reserved. | Westwinds Court - Arina Estate, Kisumu, Kenya
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

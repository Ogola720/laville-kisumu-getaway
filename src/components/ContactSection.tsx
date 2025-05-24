
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function ContactSection() {
  return (
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
  );
}

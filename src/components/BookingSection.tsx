import { useState } from 'react';
import { addDays, differenceInDays } from 'date-fns';
import { Calendar, Users, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DateRangePicker } from './DateRangePicker';

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

export function BookingSection() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });

  // Mock unavailable dates - in a real app, this would come from an API
  const unavailableDates = [
    addDays(new Date(), 5),
    addDays(new Date(), 6),
    addDays(new Date(), 12),
    addDays(new Date(), 13),
    addDays(new Date(), 14),
    addDays(new Date(), 20),
    addDays(new Date(), 25),
    addDays(new Date(), 26),
  ];

  const handleBooking = () => {
    if (dateRange.from && dateRange.to) {
      // In a real app, this would make an API call
      alert(`Booking request sent!\nCheck-in: ${dateRange.from.toDateString()}\nCheck-out: ${dateRange.to.toDateString()}`);
    }
  };

  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600 text-white">
            <Calendar className="mr-2 h-4 w-4" />
            Book Your Stay
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Check Availability & Book</h2>
          <p className="text-xl text-gray-600">Select your dates and reserve your memorable stay</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calendar Section */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Select Your Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <DateRangePicker
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
                unavailableDates={unavailableDates}
              />

              <Button 
                onClick={handleBooking}
                disabled={!dateRange.from || !dateRange.to}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {dateRange.from && dateRange.to ? 'Reserve Now' : 'Select Dates to Continue'}
              </Button>
            </CardContent>
          </Card>

          {/* Property Info & Contact */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Your Stay Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium">2-Bedroom Suite</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Max Guests</span>
                  <span className="font-medium">6 Guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Minimum Stay</span>
                  <span className="font-medium">2 Nights</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Check-in</span>
                  <span className="font-medium">3:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Check-out</span>
                  <span className="font-medium">11:00 AM</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Need Help Booking?</h4>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="tel:+254726263281">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (+254) 726263281
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:lavillesuites@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">Booking Policy</h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Free cancellation up to 24 hours before check-in</li>
                  <li>• Instant booking confirmation</li>
                  <li>• Secure payment processing</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

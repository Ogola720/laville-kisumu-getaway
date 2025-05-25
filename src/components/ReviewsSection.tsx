
import { Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function ReviewsSection() {
  const reviews = [
    {
      name: "Wycliffe Anyona",
      rating: 5,
      date: "December 2022",
      stayDuration: "Stayed a few nights",
      review: "It was a pleasure staying at Paul's apartment. It is exactly as described. Christine was very helpful and responsive host. I would recommend it for anyone looking to stay in Kisumu on a visit. The location is great too as you can navigate easily to other parts of the city."
    },
    {
      name: "Isaac",
      rating: 5,
      date: "February 2022",
      stayDuration: "Stayed a few nights",
      review: "A nice place. I highly recommend when you are in Kisumu.",
      yearsOnAirbnb: "6 years on Airbnb"
    },
    {
      name: "Isaac",
      rating: 5,
      date: "February 2022",
      stayDuration: "Stayed about a week",
      review: "Best place to stay for Kisumu trips. I Highly recommend.",
      yearsOnAirbnb: "6 years on Airbnb"
    },
    {
      name: "Viv",
      rating: 5,
      date: "January 2022",
      stayDuration: "Stayed a few nights",
      review: "We stayed at Paul's place for 2 nights. The apartment is located in a quiet and safe area and has all you need for either long or short stays. Paul is an amazing host and is always available for questions and support. Thank you Paul for everything, we enjoyed our stay.",
      yearsOnAirbnb: "14 years on Airbnb"
    },
    {
      name: "Serah",
      rating: 4,
      date: "January 2022",
      stayDuration: "Stayed one night",
      location: "Nakuru, Kenya",
      review: "Paul's place is modern, very clean, well furnished and Netflix crowns it all! The 2 bedroom house is quite spacious and has great light. I loved the fact that Paul has bottled water in the house which is one thing a guest requires as soon as you get to the house. A lot of hosts ignore this. The house is in a quiet area. Paul communicates and responds very fast, which makes booking his place very easy and if you need anything, he responds as fast. He allowed me to book one extra day at the very last minute. He has a great personality and attitude. I would definitely stay at his place any time I am in Kisumu. This has now become my home away from home! Highly recommended."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600 text-white">
            <Star className="mr-2 h-4 w-4" />
            Guest Reviews
          </Badge>
          <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 mb-6">Real reviews from our Airbnb guests</p>
          <Button asChild className="bg-[#FF5A5F] hover:bg-[#E1484D] text-white">
            <a 
              href="https://airbnb.com/h/lavillesuites" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              View All Reviews on Airbnb
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    {review.location && (
                      <p className="text-sm text-gray-600">{review.location}</p>
                    )}
                    {review.yearsOnAirbnb && (
                      <p className="text-xs text-gray-500">{review.yearsOnAirbnb}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-600">{review.date} • {review.stayDuration}</p>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join hundreds of satisfied guests who have stayed with us!</p>
          <Button asChild variant="outline" size="lg">
            <a 
              href="https://airbnb.com/h/lavillesuites" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              Book on Airbnb
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

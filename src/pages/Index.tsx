import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { QuickInfoCards } from '@/components/QuickInfoCards';
import { GallerySection } from '@/components/GallerySection';
import { BookingSection } from '@/components/BookingSection';
import { AmenitiesSection } from '@/components/AmenitiesSection';
import { LocationSection } from '@/components/LocationSection';
import { ThingsToDoSection } from '@/components/ThingsToDoSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { PaymentSection } from '@/components/PaymentSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    '/lovable-uploads/7623e742-874d-477f-b0e7-dee1736b7372.png',
    '/lovable-uploads/a09b3407-6a58-425b-bab2-a801e48653e9.png',
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

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onBookNowClick={scrollToBooking} />
      
      <HeroSection 
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        onCheckAvailabilityClick={scrollToBooking}
      />
      
      <QuickInfoCards />
      
      <GallerySection 
        images={images}
        setSelectedImage={setSelectedImage}
      />
      
      <BookingSection />
      
      <AmenitiesSection />
      
      <LocationSection />
      
      <ThingsToDoSection />
      
      <ReviewsSection />
      
      <PaymentSection />
      
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;

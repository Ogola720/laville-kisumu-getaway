
import { Camera } from 'lucide-react';

interface GallerySectionProps {
  images: string[];
  setSelectedImage: (index: number) => void;
}

export function GallerySection({ images, setSelectedImage }: GallerySectionProps) {
  return (
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
  );
}


import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function MapWidget() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    initializeMap();
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  const initializeMap = async () => {
    if (!mapContainer.current) return;

    try {
      // Dynamically import Leaflet
      const L = await import('leaflet');
      await import('leaflet/dist/leaflet.css');

      // Fix for default markers in Leaflet with bundlers
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Kisumu coordinates
      const kisumuLat = -0.0917;
      const kisumuLng = 34.7680;

      // Initialize the map
      mapInstance.current = L.map(mapContainer.current).setView([kisumuLat, kisumuLng], 14);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(mapInstance.current);

      // Add marker for Laville Suites
      const marker = L.marker([kisumuLat, kisumuLng]).addTo(mapInstance.current);
      
      // Add popup to marker
      marker.bindPopup(`
        <div style="text-align: center;">
          <h3 style="margin: 0 0 8px 0; font-weight: bold;">Laville Suites</h3>
          <p style="margin: 0; font-size: 14px;">Westwinds Court - Arina Estate</p>
          <p style="margin: 0; font-size: 12px; color: #666;">Off The Bypass, Kisumu</p>
        </div>
      `).openPopup();

      setMapLoaded(true);
    } catch (error) {
      console.error('Error loading map:', error);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5" />
          <span>Our Location</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          ref={mapContainer}
          className="w-full h-64 rounded-lg border border-gray-200 bg-gray-100"
        />
        
        {/* Location information */}
        <div className="mt-4 space-y-2">
          <div className="flex items-start space-x-2">
            <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold">Westwinds Court - Arina Estate</p>
              <p className="text-gray-600">Off The Bypass, Kisumu, Kenya</p>
              <p className="text-gray-600">Coordinates: -0.0917°, 34.7680°</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

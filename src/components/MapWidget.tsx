
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function MapWidget() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    // For demo purposes, we'll show a static map placeholder
    // Users can add their Mapbox token to make it interactive
    setMapLoaded(true);
  }, []);

  const initializeMap = async () => {
    if (!apiKey || !mapContainer.current) return;

    try {
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');
      
      mapboxgl.default.accessToken = apiKey;
      
      const map = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [34.7680, -0.0917], // Kisumu coordinates
        zoom: 14
      });

      // Add marker for Laville Suites location
      new mapboxgl.default.Marker({ color: '#3B82F6' })
        .setLngLat([34.7680, -0.0917])
        .setPopup(
          new mapboxgl.default.Popup({ offset: 25 })
            .setHTML('<h3>Laville Suites</h3><p>Westwinds Court - Arina Estate</p>')
        )
        .addTo(map);

      return () => map.remove();
    } catch (error) {
      console.error('Error loading map:', error);
    }
  };

  const handleApiKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey) {
      initializeMap();
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
        {!apiKey ? (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Interactive Map Setup</h4>
              <p className="text-sm text-gray-600 mb-3">
                To enable the interactive map, please add your Mapbox public token:
              </p>
              <form onSubmit={handleApiKeySubmit} className="space-y-2">
                <input
                  type="text"
                  placeholder="Enter Mapbox Public Token"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700"
                >
                  Load Interactive Map
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                Get your free token at{' '}
                <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  mapbox.com
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div
            ref={mapContainer}
            className="w-full h-64 rounded-lg border border-gray-200"
          />
        )}
        
        {/* Static fallback information */}
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

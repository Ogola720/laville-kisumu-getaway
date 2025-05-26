
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">L</span>
            </div>
            <span className="text-3xl font-bold tracking-wider" style={{ fontFamily: 'serif' }}>LAVILLE SUITES</span>
          </div>
          <p className="text-gray-400 mb-4">Creating memorable home stays in the heart of Kisumu, Kenya</p>
          <p className="text-sm text-gray-500">
            © 2024 Laville Suites. All rights reserved. | Westwinds Court - Arina Estate, Kisumu, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}

import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingSellButton from '@/components/FloatingSellButton';

interface ListingPageProps {
  params: {
    id: string;
  };
}

export default function ListingPage({ params }: ListingPageProps) {
  // Fake data - in real app, fetch from API
  const listing = {
    id: params.id,
    title: 'iPhone 13 Pro Max - Like New Condition',
    price: 8500,
    location: 'Casablanca, Morocco',
    description: 'Selling my iPhone 13 Pro Max in excellent condition. Only used for 6 months. Comes with original box, charger, and all accessories. No scratches or dents. Battery health at 98%.',
    images: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
    ],
    category: 'Phones',
    seller: {
      name: 'Ahmed B.',
      phone: '+212612345678',
      rating: 4.8,
    },
    postedDate: '2024-01-15',
    views: 245,
  };

  if (!listing) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Slider */}
          <div className="space-y-4">
            <div className="aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={listing.images[0]}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {listing.images.map((image, index) => (
                <div key={index} className="aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
                  <img
                    src={image}
                    alt={`${listing.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {listing.title}
              </h1>
              <p className="text-3xl font-bold text-orange-500 mb-4">
                {listing.price.toLocaleString()} DH
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                📍 {listing.location}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Posted on {new Date(listing.postedDate).toLocaleDateString()} • {listing.views} views
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Description
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {listing.description}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Seller Information
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{listing.seller.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{listing.seller.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">⭐ {listing.seller.rating} rating</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3">
              <WhatsAppButton phoneNumber={listing.seller.phone} />
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingSellButton />
    </div>
  );
}
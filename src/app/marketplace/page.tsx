import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import FiltersBar from '@/components/FiltersBar';
import FloatingSellButton from '@/components/FloatingSellButton';

export default function MarketplacePage() {
  // Fake data for listings
  const listings = [
    {
      id: '1',
      title: 'iPhone 13 Pro Max - Like New',
      price: 8500,
      location: 'Casablanca',
      image: '/api/placeholder/300/200',
      category: 'Phones',
      isNew: true,
    },
    {
      id: '2',
      title: 'Toyota Corolla 2018',
      price: 120000,
      location: 'Rabat',
      image: '/api/placeholder/300/200',
      category: 'Cars',
      isNew: false,
    },
    {
      id: '3',
      title: 'Modern Sofa Set',
      price: 2500,
      location: 'Marrakech',
      image: '/api/placeholder/300/200',
      category: 'Furniture',
      isNew: false,
    },
    {
      id: '4',
      title: 'MacBook Pro M1',
      price: 9500,
      location: 'Casablanca',
      image: '/api/placeholder/300/200',
      category: 'Electronics',
      isNew: true,
    },
    {
      id: '5',
      title: 'Apartment for Rent - Center City',
      price: 4500,
      location: 'Fes',
      image: '/api/placeholder/300/200',
      category: 'Homes',
      isNew: false,
    },
    {
      id: '6',
      title: 'Designer Dress - Size M',
      price: 800,
      location: 'Tangier',
      image: '/api/placeholder/300/200',
      category: 'Fashion',
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Marketplace
        </h1>

        {/* Filters */}
        <FiltersBar />

        {/* Trending Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Most Viewed in Your City
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.slice(0, 3).map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </section>

        {/* All Listings */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            All Listings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Load More Listings
            </button>
          </div>
        </section>
      </div>

      <Footer />
      <FloatingSellButton />
    </div>
  );
}
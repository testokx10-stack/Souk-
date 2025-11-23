import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import FiltersBar from '@/components/FiltersBar';
import FloatingSellButton from '@/components/FloatingSellButton';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Map slug to category name
  const categoryMap: { [key: string]: string } = {
    cars: 'Cars',
    phones: 'Phones',
    electronics: 'Electronics',
    homes: 'Homes',
    furniture: 'Furniture',
    services: 'Services',
    fashion: 'Fashion',
    jobs: 'Jobs',
  };

  const categoryName = categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);

  // Fake data for listings - filter by category
  const allListings = [
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
      id: '7',
      title: 'Samsung Galaxy S21',
      price: 6500,
      location: 'Rabat',
      image: '/api/placeholder/300/200',
      category: 'Phones',
      isNew: false,
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
      id: '8',
      title: 'Honda Civic 2020',
      price: 150000,
      location: 'Casablanca',
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
      id: '9',
      title: 'Wooden Dining Table',
      price: 1800,
      location: 'Fes',
      image: '/api/placeholder/300/200',
      category: 'Furniture',
      isNew: true,
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
      id: '10',
      title: 'iPad Air 4th Gen',
      price: 4500,
      location: 'Tangier',
      image: '/api/placeholder/300/200',
      category: 'Electronics',
      isNew: false,
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
      id: '11',
      title: 'Villa for Sale - Mountain View',
      price: 850000,
      location: 'Marrakech',
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
    {
      id: '12',
      title: 'Leather Jacket - Size L',
      price: 1200,
      location: 'Casablanca',
      image: '/api/placeholder/300/200',
      category: 'Fashion',
      isNew: true,
    },
  ];

  const filteredListings = allListings.filter(listing =>
    listing.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/marketplace"
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            ← Back to Marketplace
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {categoryName} Listings
        </h1>

        {/* Filters */}
        <FiltersBar />

        {/* Listings */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No listings found in this category.
            </p>
            <Link
              href="/sell"
              className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Be the first to post
            </Link>
          </div>
        )}
      </div>

      <Footer />
      <FloatingSellButton />
    </div>
  );
}
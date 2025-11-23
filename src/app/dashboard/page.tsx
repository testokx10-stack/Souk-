import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';

export default function DashboardPage() {
  // Fake user data
  const user = {
    name: 'Ahmed B.',
    email: 'ahmed@example.com',
    joinDate: '2023-06-15',
    totalListings: 12,
    activeListings: 8,
    totalViews: 2450,
    totalClicks: 180,
  };

  // Fake listings
  const listings = [
    {
      id: '1',
      title: 'iPhone 13 Pro Max - Like New',
      price: 8500,
      location: 'Casablanca',
      image: '/api/placeholder/300/200',
      category: 'Phones',
      isNew: true,
      status: 'active',
      views: 245,
      clicks: 18,
    },
    {
      id: '2',
      title: 'MacBook Pro M1',
      price: 9500,
      location: 'Casablanca',
      image: '/api/placeholder/300/200',
      category: 'Electronics',
      isNew: false,
      status: 'active',
      views: 180,
      clicks: 12,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          L3ard Dyalk
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Total Listings
            </h3>
            <p className="text-3xl font-bold text-orange-500">{user.totalListings}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Active Listings
            </h3>
            <p className="text-3xl font-bold text-blue-500">{user.activeListings}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Total Views
            </h3>
            <p className="text-3xl font-bold text-green-500">{user.totalViews.toLocaleString()}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Total Clicks
            </h3>
            <p className="text-3xl font-bold text-purple-500">{user.totalClicks}</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Profile Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Name</p>
              <p className="font-semibold text-gray-900 dark:text-white">{user.name}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Email</p>
              <p className="font-semibold text-gray-900 dark:text-white">{user.email}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Member Since</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {new Date(user.joinDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Listings Management */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Modifi L3ard
            </h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors">
              Zid L3ard Jadid
            </button>
          </div>

          <div className="space-y-4">
            {listings.map((listing) => (
              <div key={listing.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{listing.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{listing.price} DH • {listing.views} views • {listing.clicks} clicks</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors">
                      Modifi
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors">
                      7ayd
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
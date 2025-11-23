import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategoryCard from '@/components/CategoryCard';
import FloatingSellButton from '@/components/FloatingSellButton';

export default function Home() {
  const categories = [
    { name: 'Sayarat', icon: '🚗', count: 1250, href: '/category/cars' },
    { name: 'Télifonat', icon: '📱', count: 890, href: '/category/phones' },
    { name: 'Electronics', icon: '💻', count: 650, href: '/category/electronics' },
    { name: 'Dar w Appart', icon: '🏠', count: 420, href: '/category/homes' },
    { name: 'Farcha', icon: '🛋️', count: 380, href: '/category/furniture' },
    { name: 'Khadamat', icon: '🛠️', count: 290, href: '/category/services' },
    { name: 'Hwayej', icon: '👗', count: 550, href: '/category/fashion' },
    { name: 'Jobs', icon: '💼', count: 180, href: '/category/jobs' },
  ];

  const testimonials = [
    {
      name: 'Ahmed B.',
      text: 'Souq+ made selling my car so easy! Found a buyer in just 2 days.',
      location: 'Casablanca',
    },
    {
      name: 'Fatima K.',
      text: 'Great platform for buying second-hand items. Very trustworthy.',
      location: 'Rabat',
    },
    {
      name: 'Youssef M.',
      text: 'The WhatsApp integration is genius. No more endless calls!',
      location: 'Marrakech',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-blue-500/20"></div>
        {/* Moroccan geometric shapes background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="geometric" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="20" height="20" fill="none" />
                <circle cx="10" cy="10" r="2" fill="currentColor" />
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" />
                <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Souq+ — <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Sla3a b-Zerba</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            F Morocco Kamel. Tchri w Tbi3 Bla Tkachf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sell"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Bda Tbi3
            </Link>
            <Link
              href="/marketplace"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 transition-all duration-300"
            >
              Tchri Hna
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            L’3ard
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Souq+ Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Souq+?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast & Easy</h3>
              <p className="text-gray-600 dark:text-gray-300">Post your listing in minutes and reach thousands of buyers instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">Safe transactions with verified users and secure payment options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Local Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect with buyers and sellers in your city for better deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSellButton />
    </div>
  );
}

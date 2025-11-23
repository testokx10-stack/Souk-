import React from 'react';
import Link from 'next/link';
import SouqPlusLogo from './SouqPlusLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <SouqPlusLogo variant="dark" size="large" />
            <p className="mt-4 text-gray-400 max-w-md">
              Souq+ — Sla3a b-Zerba, F Morocco Kamel. Tchri w Tbi3 Bla Tkachf.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">L’3ard</h3>
            <ul className="space-y-2">
              <li><Link href="/categories" className="text-gray-400 hover:text-orange-400 transition-colors">Fina</Link></li>
              <li><Link href="/sell" className="text-gray-400 hover:text-orange-400 transition-colors">Bda Tbi3</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">3la Souq+</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">Ttassel Ma3ana</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Msa3da</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-orange-400 transition-colors">Msa3da</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-orange-400 transition-colors">As2ila M3tada</Link></li>
              <li><Link href="/safety" className="text-gray-400 hover:text-orange-400 transition-colors">Aman</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">Chorout</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Souq+. Kul L7oq M7foda.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
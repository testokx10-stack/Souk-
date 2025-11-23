import React from 'react';
import Link from 'next/link';

const FloatingSellButton: React.FC = () => {
  return (
    <Link href="/sell">
      <button className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <span className="sr-only">Bda Tbi3</span>
      </button>
    </Link>
  );
};

export default FloatingSellButton;
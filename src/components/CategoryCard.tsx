import React from 'react';
import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
  href: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon, count, href }) => {
  return (
    <Link href={href} className="block">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{count} listings</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ListingCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  category: string;
  isNew?: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  title,
  price,
  location,
  image,
  category,
  isNew = false,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Just Posted!
          </span>
        )}
        <span className="absolute top-2 right-2 bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded text-xs">
          {category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-2xl font-bold text-orange-500 mb-2">
          {price.toLocaleString()} DH
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          📍 {location}
        </p>
        <Link
          href={`/listing/${id}`}
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-md transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ListingCard;
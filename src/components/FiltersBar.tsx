import React from 'react';

const FiltersBar: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-wrap gap-4 items-center">
        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <option>All Categories</option>
          <option>Cars</option>
          <option>Phones</option>
          <option>Homes</option>
        </select>
        <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
          <option>All Cities</option>
          <option>Casablanca</option>
          <option>Rabat</option>
          <option>Marrakech</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-24"
        />
        <input
          type="number"
          placeholder="Max Price"
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 w-24"
        />
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors">
          Filtrer
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;
// src/pages/NotFoundPage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl font-medium text-gray-700 mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="mt-6">
        <button className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

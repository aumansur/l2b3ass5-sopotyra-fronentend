// src/pages/UnauthorizedPage.tsx

import React from "react";
import { Link } from "react-router-dom";

const UnauthorizedPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600">Access Denied</h1>
        <p className="mt-4 text-xl font-semibold text-gray-800">
          You do not have the necessary permissions to access this page.
        </p>
        <p className="mt-2 text-lg text-gray-600">
          This area is restricted to authorized personnel only. It seems like
          you're not allowed to be here.
        </p>
        <div className="mt-6 space-x-4">
          <Link to="/" className="inline-block">
            <button className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Go to Homepage
            </button>
          </Link>
          <Link to="/login" className="inline-block">
            <button className="px-6 py-3 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;

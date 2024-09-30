// src/pages/NotFoundPage.tsx

import React from "react";
import { Link } from "react-router-dom";
import animation404 from "../assets/Animation404.gif";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img sizes="96" src={animation404} alt="" />
      <p className="text-2xl font-medium text-gray-700 mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="mt-6">
        <button className="my-primary-btn">Go to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

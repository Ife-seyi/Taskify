import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center">

      {/* Container with max width and full height */}
      <div className="w-full max-w-md flex flex-col h-full">
        <button onClick={handleBack} className="text-gray-700 text-2xl mb-4">
          <FaArrowLeft />
        </button>

        {/* Headings */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Reset your password
          </h2>
          <p className="text-sm text-gray-500">Enter your email address</p>
        </div>

        {/* Input */}
        <div className="mt-8">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="eg emmanuel@gmail.com"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Pushes button to the bottom */}
        <div className="mt-auto pt-10">
          <Link
            to="/verify-email"
            className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-md font-semibold transition"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

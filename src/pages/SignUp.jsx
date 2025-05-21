import React from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // ✅ Import Link

const SignUp = () => {
  return (
    <div className="min-h-screen bg-[#e6f7f6] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gradient-to-r from-[#14b8a6] to-[#99f6e4] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Create new account
        </h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="eg emmanuelog"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="eg emmanuel@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          {/* ✅ Sign Up button */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          OR SIGNUP WITH:
        </div>

        <div className="flex justify-center gap-8 mt-4">
          <FaApple className="text-2xl text-black cursor-pointer hover:scale-110 transition" />
          <FcGoogle className="text-2xl cursor-pointer hover:scale-110 transition" />
        </div>

        <div className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-600 font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

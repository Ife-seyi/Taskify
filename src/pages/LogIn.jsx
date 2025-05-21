import React from 'react';
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  return (
    <div className="min-h-screen bg-[#f2f1ee] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login to your account</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="eg emmanuel@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-orange-500 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">OR LOGIN WITH:</div>

        <div className="flex justify-center gap-8 mt-4">
          <FaApple className="text-2xl text-black cursor-pointer hover:scale-110 transition" />
          <FcGoogle className="text-2xl cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </div>
  );
};
export default Login;

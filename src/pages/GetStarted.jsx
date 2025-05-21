import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import getStarted from '../assets/getStarted.png'


const GetStarted = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1c98] text-white flex flex-col items-center justify-between px-6 py-10">
      {/* Top section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black">Get started</h1>
        <p className="mt-2 text-sm text-black">
          Create tasks · Set reminders · Stay organized · Track progress
        </p>
      </div>

      {/* Middle illustration */}
      <div className="my-8">
        <img
          src={getStarted}
          alt="Task management illustration"
          className="w-[280px] sm:w-[320px] mx-auto"
        />
      </div>

      {/* Bottom buttons */}
      <div className="w-full flex flex-col items-center gap-4">
        <Link
          to="/login"
          className="w-full max-w-xs text-center py-3 rounded-md bg-[#5a079e] text-black font-semibold"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="w-full max-w-xs text-center py-3 rounded-md border border-[black] text-[#5a079e] font-semibold"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
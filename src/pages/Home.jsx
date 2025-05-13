import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Welcome to Taskify
        </h1>
        <p className="text-lg md:text-2xl animate__animated animate__fadeInUp">
          Manage your tasks like never before.
        </p>
      </div>
    </motion.div>
    </div>
  )
}

export default Home
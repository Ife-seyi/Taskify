import React from 'react'
import { motion } from 'framer-motion'

const AddTodoButton = ({onClick}) => {
  return (
     <motion.button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none w-full sm:w-auto"
      whileTap={{ scale: 1.1 }} // Animate the button on click
    >
      Add Task
    </motion.button>
  )
}

export default AddTodoButton;

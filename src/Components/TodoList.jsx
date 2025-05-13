import React from 'react';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
    {todos.map((todo) => (
      <motion.div
        key={todo.id}
        initial={{ x: -100, opacity: 0 }} // Start off-screen with low opacity
        animate={{ x: 0, opacity: 1 }} // Slide in and fade in
        exit={{ x: 100, opacity: 0 }} // Slide out and fade out
        transition={{ duration: 0.5 }}
      >
        <TodoItem todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </motion.div>
    ))}
  </div>
  );
}

export default TodoList;

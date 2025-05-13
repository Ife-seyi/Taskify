import React from 'react';
import { motion } from 'framer-motion';
import DeleteTodoButton from './DeleteTodoButton';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <motion.div
    className="flex items-center justify-between p-2 my-2 border border-gray-300 rounded"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div 
      onClick={() => toggleComplete(todo.id)} 
      className={`flex items-center ${todo.completed ? 'line-through text-green-500' : ''}`}
    >
      {todo.completed && (
        <motion.span
          className="mr-2 text-green-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          ✔️
        </motion.span>
      )}
      <span>{todo.text}</span>
    </div>
    <DeleteTodoButton onClick={() => deleteTodo(todo.id)} />
  </motion.div>
  );
}

export default TodoItem;

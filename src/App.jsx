import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddTodoButton from './Components/AddTodoButton';
import FilterButtons from './Components/FilterButtons';
import TodoList from './Components/TodoList';
import SplashScreen from './Components/SplashScreen';

const TAG_COLORS = {
  Work: 'bg-blue-500',
  Personal: 'bg-green-500',
  Urgent: 'bg-red-500',
  Shopping: 'bg-yellow-500',
  Others: 'bg-purple-500',
};

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, tag) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      tag,
    };
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSplashComplete = () => {
    setLoading(false);
  };

  if (loading) {
    return <SplashScreen onAnimationComplete={handleSplashComplete} />;
  }

  // Filtered todos based on the selected tag
  const filteredTodos = selectedTag === 'All' ? todos : todos.filter(todo => todo.tag === selectedTag);

  // Group by Tags
  const groupedTodos = filteredTodos.reduce((acc, todo) => {
    if (!acc[todo.tag]) {
      acc[todo.tag] = [];
    }
    acc[todo.tag].push(todo);
    return acc;
  }, {});

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 md:p-6">
      <h1 className="text-center text-3xl font-semibold mb-6">Taskify</h1>

      {/* Add Task Section */}
      <div className="mb-6 flex flex-col space-y-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="p-2 border rounded w-full md:w-auto"
          placeholder="Add a new task"
        />
        <AddTodoButton onClick={() => addTodo(newTodo, selectedTag)} />
      </div>

          {/* Filter Buttons */}
          <div className="overflow-x-auto pb-2">
        <FilterButtons filter={selectedTag} setFilter={setSelectedTag} />
      </div>

      {/* Grouped Tasks with Animation */}
      <AnimatePresence>
        {selectedTag === 'All' ? (
          Object.keys(groupedTodos).map(tag => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-4 bg-white p-3 rounded-lg shadow"
            >
              <h2
                className={`text-xl font-bold mb-2 text-white px-3 py-1 rounded-lg ${TAG_COLORS[tag] || 'bg-gray-500'}`}
              >
                {tag}
              </h2>
              <TodoList
                todos={groupedTodos[tag]}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <TodoList
              todos={filteredTodos}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


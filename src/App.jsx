import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AddTodoButton from './Components/AddTodoButton';
import DragDropTodoList from './Components/DragDropTodoList';
import SplashScreen from './Components/SplashScreen';
import TagsSelector from './Components/TagsSelector';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      tag: selectedTag,
    };
    setTodos([...todos, newTodo]);
    setNewTodo('');
    setSelectedTag('');
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
  };

  return (
    <div>
      <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-center text-3xl font-semibold mb-6">Taskify</h1>

        {/* Add Task Section */}
        <div className="mb-6 flex flex-col space-y-4">
          <input 
            type="text" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
            className="p-2 border rounded"
            placeholder="Add a new task"
          />
          <TagsSelector selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          <AddTodoButton onClick={() => addTodo(newTodo)} />
        </div>

        {/* Drag-and-Drop Todo List */}
        <DragDropTodoList
          todos={todos}
          setTodos={setTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;

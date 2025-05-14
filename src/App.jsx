// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import AddTodoButton from './Components/AddTodoButton';
// import FilterButtons from './Components/FilterButtons';
// import TodoList from './Components/TodoList';
// import SplashScreen from './Components/SplashScreen';

// const TAG_COLORS = {
//   Work: 'bg-blue-500',
//   Personal: 'bg-green-500',
//   Urgent: 'bg-red-500',
//   Shopping: 'bg-yellow-500',
//   Others: 'bg-purple-500',
// };

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   const [selectedTag, setSelectedTag] = useState('All');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(savedTodos);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (text, tag) => {
//     const newTodo = {
//       id: Date.now(),
//       text,
//       completed: false,
//       tag,
//     };
//     setTodos([...todos, newTodo]);
//     setNewTodo('');
//   };

//   const toggleComplete = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

 

//   const handleSplashComplete = () => {
//     setLoading(false);
//   };

//   if (loading) {
//     return <SplashScreen onAnimationComplete={handleSplashComplete} />;
//   }

//   const filteredTodos = selectedTag === 'All' ? todos : todos.filter(todo => todo.tag === selectedTag);

//   const groupedTodos = filteredTodos.reduce((acc, todo) => {
//     if (!acc[todo.tag]) {
//       acc[todo.tag] = [];
//     }
//     acc[todo.tag].push(todo);
//     return acc;
//   }, {});

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-4 md:p-6">
//         <h1 className="text-3xl font-semibold mb-6">Taskify</h1>

//       <div className="mb-6 flex flex-col md:flex-row md:space-x-4">
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           className="p-2 border rounded w-full md:w-auto mb-5"
//           placeholder="Add a new task"
//         />
//         <AddTodoButton onClick={() => addTodo(newTodo, selectedTag)} />
//       </div>

//       <div className="overflow-x-auto pb-2 mb-4">
//         <FilterButtons filter={selectedTag} setFilter={setSelectedTag} />
//       </div>

//       <AnimatePresence>
//         {selectedTag === 'All' ? (
//           Object.keys(groupedTodos).map(tag => (
//             <motion.div
//               key={tag}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.3 }}
//               className="mb-4 bg-white p-3 rounded-lg shadow"
//             >
//               <h2
//                 className={`text-xl font-bold mb-2 text-white px-3 py-1 rounded-lg ${TAG_COLORS[tag] || 'bg-gray-500'}`}
//               >
//                 {tag}
//               </h2>
//               <TodoList
//                 todos={groupedTodos[tag]}
//                 toggleComplete={toggleComplete}
//                 deleteTodo={deleteTodo}
//               />
//             </motion.div>
//           ))
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <TodoList
//               todos={filteredTodos}
//               toggleComplete={toggleComplete}
//               deleteTodo={deleteTodo}
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default App;


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

  const filteredTodos = selectedTag === 'All' ? todos : todos.filter(todo => todo.tag === selectedTag);

  const groupedTodos = filteredTodos.reduce((acc, todo) => {
    if (!acc[todo.tag]) {
      acc[todo.tag] = [];
    }
    acc[todo.tag].push(todo);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 md:p-8">
      <h1 className="text-4xl font-semibold mb-6 text-center">Taskify</h1>

      <div className="mb-6 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="p-3 border rounded w-full"
          placeholder="Add a new task"
        />
        <AddTodoButton onClick={() => addTodo(newTodo, selectedTag)} />
      </div>

      <div className="mb-6">
        <FilterButtons filter={selectedTag} setFilter={setSelectedTag} />
      </div>

      <AnimatePresence>
        {selectedTag === 'All' ? (
          Object.keys(groupedTodos).map(tag => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-6 bg-white p-4 rounded-lg shadow-md"
            >
              <h2
                className={`text-2xl font-bold mb-4 text-white px-3 py-1 rounded-lg ${TAG_COLORS[tag] || 'bg-gray-500'}`}
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

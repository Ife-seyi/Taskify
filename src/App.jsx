// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import AddTodoButton from './Components/AddTodoButton';
// import FilterButtons from './Components/FilterButtons';
// import TodoList from './Components/TodoList';
// import SplashScreen from './Components/SplashScreen';
// import CalendarView from './Components/CalenderView';
// import Home from './pages/Home';


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
//   const [streak, setStreak] = useState(0);
//   const [lastCompletedDate, setLastCompletedDate] = useState(null);
//   const [showBadge, setShowBadge] = useState(false);

//   useEffect(() => {
//     const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
//     setTodos(savedTodos);

//     const savedStreak = parseInt(localStorage.getItem('streak')) || 0;
//     setStreak(savedStreak);

//     const savedDate = localStorage.getItem('lastCompletedDate');
//     setLastCompletedDate(savedDate ? new Date(savedDate) : null);

//     if (savedStreak >= 5) {
//       setShowBadge(true);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//     localStorage.setItem('streak', streak);
//     if (lastCompletedDate) {
//       localStorage.setItem('lastCompletedDate', lastCompletedDate.toISOString());
//     }
//   }, [todos, streak, lastCompletedDate]);

//   const addTodo = (text, dueDate, tag = 'Others') => {
//     // Ensure dueDate is valid before adding
//     const validDueDate = dueDate ? new Date(dueDate) : null;
  
//     if (validDueDate && isNaN(validDueDate.getTime())) {
//       alert('Invalid date. Please enter a correct date format.');
//       return;
//     }
  
//     const newTodo = {
//       id: Date.now(),
//       text,
//       completed: false,
//       tag,
//       dueDate: validDueDate ? validDueDate.toISOString() : null,
//     };
//     setTodos([...todos, newTodo]);
//     setNewTodo('');
//   };
  
  

//   const toggleComplete = (id) => {
//     const updatedTodos = todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);

//     if (!lastCompletedDate || new Date().toDateString() !== lastCompletedDate.toDateString()) {
//       const newStreak = streak + 1;
//       setStreak(newStreak);
//       setLastCompletedDate(new Date());
//       if (newStreak >= 5) {
//         setShowBadge(true);
//       }
//     }
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
//     <div className="max-w-2xl mx-auto mt-10 p-4 md:p-6">
//        <Home/>
//       <h1 className="text-4xl font-bold text-center mb-6">Taskify</h1>

//       <motion.div
//         className="bg-green-500 text-white text-center py-2 mb-6 rounded-lg shadow-md"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         🔥 Current Streak: {streak} Day{streak !== 1 ? 's' : ''}
//       </motion.div>

//       {showBadge && (
//         <motion.div
//           className="bg-yellow-400 text-white text-center py-2 mb-6 rounded-lg shadow-md animate-bounce"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           🏅 Congratulations! You've earned a 5-Day Streak Badge!
//         </motion.div>
//       )}

//       <div className="mb-6 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4">
//         <input
//           type="text"
//           value={newTodo}
//           onChange={(e) => setNewTodo(e.target.value)}
//           className="p-2 border rounded w-full"
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
//       <CalendarView todos={todos}/>
    

//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import GetStarted from './pages/GetStarted';
// import Login from './pages/Login';   // <- Import your Login page
// import Signup from './pages/Signup'; // <- Import your Signup page

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<GetStarted />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
      navigate('/'); // Go to GetStarted after splash
    }, 3000); // 3 seconds splash

    return () => clearTimeout(timeout);
  }, [navigate]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;


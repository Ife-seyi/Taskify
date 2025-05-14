import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css'; // To override some calendar styles
import { motion } from 'framer-motion';

const CalendarView = ({ todos }) => {
  const [value, setValue] = useState(new Date());
  const [selectedDateTasks, setSelectedDateTasks] = useState([]);

  // Function to format date to YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  // Update tasks when date is clicked
  useEffect(() => {
    const selectedTasks = todos.filter(todo =>
      formatDate(new Date(todo.dueDate)) === formatDate(value)
    );
    setSelectedDateTasks(selectedTasks);
  }, [value, todos]);

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">📅 Calendar View</h2>

      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date }) => {
          const formattedDate = formatDate(date);
          const taskOnDate = todos.some(todo => formatDate(new Date(todo.dueDate)) === formattedDate);

          if (taskOnDate) {
            return 'bg-blue-200';
          }
          return null;
        }}
      />

      <div className="mt-5">
        <h3 className="text-xl font-semibold mb-3">Tasks for {value.toDateString()}:</h3>
        {selectedDateTasks.length > 0 ? (
          <ul>
            {selectedDateTasks.map((task) => (
              <li key={task.id} className="mb-2">
                <span className={`px-2 py-1 rounded-lg text-white ${task.completed ? 'bg-green-500' : 'bg-red-500'}`}>
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks for this date.</p>
        )}
      </div>
    </motion.div>
  );
};

export default CalendarView;

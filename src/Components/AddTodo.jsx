import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() && dueDate) {
      addTodo(inputText, dueDate);
      setInputText('');
      setDueDate('');
    } else {
      alert("Please enter both task and due date.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4 md:flex-row">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="p-2 border border-gray-300 rounded flex-1"
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;

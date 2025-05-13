import React, { useState } from 'react';

const TAGS = [
  { label: 'Work', color: 'bg-blue-500' },
  { label: 'Personal', color: 'bg-green-500' },
  { label: 'Urgent', color: 'bg-red-500' },
  { label: 'Shopping', color: 'bg-yellow-500' },
  { label: 'Others', color: 'bg-purple-500' },
];

const TagsSelector = ({ selectedTag, setSelectedTag }) => {
  return (
    <div className="flex space-x-2 mb-4">
      {TAGS.map((tag) => (
        <button
          key={tag.label}
          className={`px-3 py-1 rounded-full text-white ${tag.color} ${selectedTag === tag.label ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
          onClick={() => setSelectedTag(tag.label)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};

export default TagsSelector;


// EduInput.js

import React from 'react';

const EduInput = () => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Education</h1>
      <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
        University/College
      </label>
      <input
        type="text"
        id="university"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="Advanced College of Engineering and Management"
        required
      />

      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
        Course
      </label>
      <input
        type="text"
        id="course"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="Bachelor of Computer Application"
        required
      />

      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
        Start Date
      </label>
      <input
        type="number"
        id="startDate"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="2078"
        required
      />

      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
        End Date
      </label>
      <input
        type="number"
        id="endDate"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="2079"
        required
      />

      <label htmlFor="gpa" className="block text-sm font-medium text-gray-700 mb-2">
        GPA
      </label>
      <input
        type="number"
        id="gpa"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4"
        placeholder="4.0"
        required
      />
    </div>
  );
};

export default EduInput;

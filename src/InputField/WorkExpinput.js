// WorkExpInput.js

import React from 'react';

const WorkExpInput = () => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
        Organization/University/Project Name
      </label>
      <input
        type="text"
        id="organization"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="Mailmeets"
        required
      />

      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
        Role/Responsibility/Course
      </label>
      <input
        type="text"
        id="role"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="Digital Marketer"
        required
      />

      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
        Start Date
      </label>
      <input
        type="number"
        id="startDate"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="2079"
        required
      />

      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
        End Date
      </label>
      <input
        type="number"
        id="endDate"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="2080"
        required
      />

      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
        Description
      </label>
      <textarea
        id="description"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 resize-none h-24 mb-3"
        placeholder="Designed and coded responsive email templates, ensuring a consistent and appealing brand image across all campaigns."
        required
      />
    </div>
  );
};

export default WorkExpInput;

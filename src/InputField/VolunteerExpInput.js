// VolunteerExpInput.js

import React from 'react';

const VolunteerExpInput = () => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Volunteer Experience</h1>

      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
        Organization/Project Name
      </label>
      <input
        type="text"
        id="organization"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="Leo Club of Lekhnath Sahaara"
        required
      />

      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
        Role/Responsibility/Post
      </label>
      <input
        type="text"
        id="role"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="President"
        required
      />

      <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
        Start Date
      </label>
      <input
        type="number"
        id="startDate"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="2076"
        required
      />

      <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
        End Date
      </label>
      <input
        type="number"
        id="endDate"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="2077"
        required
      />

      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
        Description
      </label>
      <textarea
        id="description"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 resize-none h-24"
        placeholder="Led cleanliness campaigns, hunger relief programs, and fundraisers."
        required
      />
    </div>
  );
};

export default VolunteerExpInput;

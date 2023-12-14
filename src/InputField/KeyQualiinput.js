// KeyQualiInput.js

import React from 'react';

const KeyQualiInput = () => {
  return (
    <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Key Qualification</h1>

      <label htmlFor="keyQualification" className="block text-sm font-medium text-gray-700 mb-2">
        Key Qualification
      </label>
      <input
        type="text"
        id="keyQualification"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4"
        placeholder="Saurav Subedi"
        required
      />
    </div>
  );
};

export default KeyQualiInput;

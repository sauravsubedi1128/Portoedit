// LanguageInput.js

import React from 'react';

const LanguageInput = () => {
  return (
    <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Languages</h1>

      <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-2">
        Languages
      </label>
      <input
        type="text"
        id="languages"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4"
        placeholder="English, Spanish, French"
        required
      />
    </div>
  );
};

export default LanguageInput;

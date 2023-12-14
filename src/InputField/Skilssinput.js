// SkillsInput.js

import React from 'react';

const SkillsInput = () => {
  return (
    <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">Skills</h1>

      <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
        Skills
      </label>
      <input
        type="text"
        id="skills"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4"
        placeholder="React, JavaScript, HTML, CSS"
        required
      />
    </div>
  );
};

export default SkillsInput;

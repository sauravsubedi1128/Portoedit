// HeaderInput.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateHeader } from '../Redux/Actions';

const HeaderInput = () => {

  const dispatch = useDispatch()
  const {header } = useSelector(
    (state) => state
  );

  const handleHeaderChange = (event) => {
    const value = event.target.value;
    dispatch(updateHeader(value));
  };
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Name</h1>
      <label
        htmlFor="header"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Header
      </label>
      <input
        type="text"
        id="header"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4"
        placeholder="Saurav Subedi"
        required
        onChange={handleHeaderChange}
      />
    </div>
  );
};

export default HeaderInput;

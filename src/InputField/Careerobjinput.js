// CareerObjInput.js

import React from "react";
import { updatecareerobj } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
const CareerObjInput = () => {

  const dispatch = useDispatch();
  const { careerobj } = useSelector(
    (state) => state
  );
  const handleCareerObjChange = (event) => {
    const value = event.target.value;
    dispatch(updatecareerobj(value));
  };
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Career Objective</h1>
      <label
        htmlFor="careerObjective"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Career Objective
      </label>
      <textarea
        id="careerObjective"
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 resize-none h-24"
        placeholder="To advance my career in a dynamic organization, leveraging my skills to meet challenges and achieve organizational objectives."
        required
        onChange={handleCareerObjChange}
      />
    </div>
  );
};

export default CareerObjInput;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updatePhoneNumber,
  updateEmail,
  updateAddress,
  updateLinkedin,
} from '../Redux/Actions';

const ContactInput = () => {
  const dispatch = useDispatch();
  const { phoneNumber, email, address, linkedin } = useSelector(
    (state) => state
  );

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    dispatch(updatePhoneNumber(value));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    dispatch(updateEmail(value));
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    dispatch(updateAddress(value));
  };

  const handleLinkedinChange = (event) => {
    const value = event.target.value;
    dispatch(updateLinkedin(value));
  };

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-4">Contact Details</h1>
      
      {/* Phone Input */}
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        value={phoneNumber}
        onChange={handlePhoneNumberChange} 
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="9862458844"
        required
      />
     

      {/* Email Input */}
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="sauravsubedi1128@gmail.com"
        required
      />
     
      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
        Address
      </label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={handleAddressChange}
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4 mb-3"
        placeholder="Syuchata, Kathmandu"
        required
      />
     
      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
        LinkedIn
      </label>
      <input
        type="text"
        id="linkedin"
        value={linkedin}
        onChange={handleLinkedinChange}
        className="bg-white border border-gray-300 text-gray-800 text-sm rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-4"
        placeholder="https://www.linkedin.com/in/saurav-subedi-56b616284/"
        required
      />
      
    </div>
  );
};

export default ContactInput;

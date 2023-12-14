// Actions.js
import {
  UPDATE_HEADER,
  UPDATE_PHONE_NUMBER,
  UPDATE_EMAIL,
  UPDATE_ADDRESS,
  UPDATE_LINKEDIN,
} from '../Redux/ActionTypes'; 

export const updateHeader = (header) => ({
  type:  UPDATE_HEADER,
  payload: header,
});
export const updatePhoneNumber = (phoneNumber) => ({
  type: UPDATE_PHONE_NUMBER,
  payload: phoneNumber,
});

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

export const updateAddress = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address,
});

export const updateLinkedin = (linkedin) => ({
  type: UPDATE_LINKEDIN,
  payload: linkedin,
});

export const clickBtn = (data) =>(
  {
    type:"BTN_CLICK",
    payload:data
  }
)

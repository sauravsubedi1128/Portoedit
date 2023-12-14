// Reducers.js
import {
  UPDATE_HEADER,
  UPDATE_PHONE_NUMBER,
  UPDATE_EMAIL,
  UPDATE_ADDRESS,
  UPDATE_LINKEDIN,
} from '../Redux/ActionTypes';

const initialState = {
  header: '',
  phoneNumber: '',
  email: '',
  address: '',
  linkedin: '',
  btn : false
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case  UPDATE_HEADER:
      return { ...state, header: action.payload };
    case UPDATE_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_LINKEDIN:
      return { ...state, linkedin: action.payload };
      case "BTN_CLICK" :
        return { ...state , btn : action.payload }
    default:
      return state;
  }
};

export default contactReducer;
import {
  UPDATE_HEADER,
  UPDATE_PHONE_NUMBER,
  UPDATE_EMAIL,
  UPDATE_ADDRESS,
  UPDATE_LINKEDIN,
  UPDATE_CAREEROBJ,
  NAME_BTN,
  BTN_CLICK,
  EDU_BTN,
  CAREEROBJ_BTN,
  CONTACT_BTN,
  SKILLS_BTN,
  LANGUAGE_BTN,
  WORKEXP_BTN,
  VOLUNEXP_BTN,
  KEYQUAL_BTN,
} from "../Redux/ActionTypes";

const initialState = {
  header: "",
  phoneNumber: "",
  email: "",
  address: "",
  linkedin: "",
  btn: false,
  nameBtn: false,
  eduBtn: false,
  careerobjBtn: false,
  contactBtn: false,
  skillsBtn: false,
  languageBtn: false,
  workexpBtn: false,
  volunexpBtn: false,
  keyqualBtn: false,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HEADER:
      return { ...state, header: action.payload };
    case UPDATE_PHONE_NUMBER:
      return { ...state, phoneNumber: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case UPDATE_LINKEDIN:
      return { ...state, linkedin: action.payload };
    case BTN_CLICK:
      return { ...state, btn: action.payload };
    case NAME_BTN:
      return { ...state, nameBtn: action.payload };
    case EDU_BTN:
      return { ...state, eduBtn: action.payload };
    case CAREEROBJ_BTN:
      return { ...state, careerobjBtn: action.payload };
    case CONTACT_BTN:
      return { ...state, contactBtn: action.payload };
    case SKILLS_BTN:
      return { ...state, skillsBtn: action.payload };
    case LANGUAGE_BTN:
      return { ...state, languageBtn: action.payload };
    case WORKEXP_BTN:
      return { ...state, workexpBtn: action.payload };
    case VOLUNEXP_BTN:
      return { ...state, volunexpBtn: action.payload };
    case KEYQUAL_BTN:
      return { ...state, keyqualBtn: action.payload };
    case UPDATE_CAREEROBJ:
      return { ...state, keyqualBtn: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
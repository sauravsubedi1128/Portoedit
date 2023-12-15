import {
  UPDATE_HEADER,
  UPDATE_PHONE_NUMBER,
  UPDATE_EMAIL,
  UPDATE_ADDRESS,
  UPDATE_LINKEDIN,
  UPDATE_CAREEROBJ,
  BTN_CLICK,
  CAREEROBJ_BTN,
  EDU_BTN,
  NAME_BTN,
  CONTACT_BTN,
  SKILLS_BTN,
  LANGUAGE_BTN,
  WORKEXP_BTN,
  VOLUNEXP_BTN,
  KEYQUAL_BTN,
} from "../Redux/ActionTypes";

export const updateHeader = (header) => ({
  type: UPDATE_HEADER,
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

export const updatecareerobj = (careerobj) => ({
  type: UPDATE_CAREEROBJ ,
  payload: careerobj
})

export const clickBtn = (data) => ({
  type: BTN_CLICK,
  payload: data,
});

export const clickNameBtn = (data) => ({
  type: NAME_BTN,
  payload: data,
});

export const clickEduBtn = (data) => ({
  type: EDU_BTN,
  payload: data,
});

export const clickcareerobjBtn = (data) => ({
  type: CAREEROBJ_BTN,
  payload: data,
});

export const clickcontactBtn = (data) => ({
  type: CONTACT_BTN,
  payload: data,
});

export const clickskillsBtn = (data) => ({
  type: SKILLS_BTN,
  payload: data,
});

export const clicklanguageBtn = (data) => ({
  type: LANGUAGE_BTN,
  payload: data,
});

export const clickworkexpBtn = (data) => ({
  type: WORKEXP_BTN,
  payload: data,
});

export const clickvolunexpBtn = (data) => ({
  type: VOLUNEXP_BTN,
  payload: data,
});

export const clickkeyqualBtn = (data) => ({
  type: KEYQUAL_BTN,
  payload: data,
});
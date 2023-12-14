// store.js
import { createStore } from 'redux';
import contactReducer from '../Redux/Reducers'

const store = createStore(contactReducer);

export default store;
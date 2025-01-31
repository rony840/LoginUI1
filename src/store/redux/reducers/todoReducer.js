// reducers/todoReducer.js
import { ADD_TODO, REMOVE_TODO } from "../ActionTypes";
const initialState = ['helper','redux','geolocation'];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;

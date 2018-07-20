import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0,
}

const increment = (state, action) => {
  return updateObject(state, { counter: state.counter + 1 });
}

const decrement = (state, action) => {
  return updateObject(state, { counter: state.counter - 1 });
}

const add = (state, action) => {
  return updateObject(state, { counter: state.counter + action.val });
}

const subtract = (state, action) => {
  return updateObject(state, { counter: state.counter - action.val });
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: return increment(state, action);
    case actionTypes.DECREMENT: return decrement(state, action);
    case actionTypes.ADD: return add(state, action);
    case actionTypes.SUBTRACT: return subtract(state, action);
    default:
      return state;
  }
};

export default reducer;
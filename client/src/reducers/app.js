import { Map } from 'immutable';
import { SET_INITIAL_SAVINGS_AMOUNT } from '../actions/app';

const initialState = Map({
  initialSavingsAmount: 1500
});

export default (state = initialState, action) => {
  if (action.type === SET_INITIAL_SAVINGS_AMOUNT) {
    return state.set('initialSavingsAmount', action.amount);
  } else {
    return state;
  }
};
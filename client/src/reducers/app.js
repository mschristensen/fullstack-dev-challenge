import { Map } from 'immutable';
import {
  SET_INITIAL_SAVINGS_AMOUNT,
  SET_MONTHLY_DEPOSIT_AMOUNT,
  SET_INTEREST_RATE
} from '../actions/app';

const initialState = Map({
  initialSavingsAmount: 1500,
  monthlyDepositAmount: 100,
  interestRate: 5
});

export default (state = initialState, action) => {
  if (action.type === SET_INITIAL_SAVINGS_AMOUNT) {
    return state.set('initialSavingsAmount', action.amount);
  } else if (action.type === SET_MONTHLY_DEPOSIT_AMOUNT) {
    return state.set('monthlyDepositAmount', action.amount);
  } else if (action.type === SET_INTEREST_RATE) {
    return state.set('interestRate', action.rate);
  } else {
    return state;
  }
};
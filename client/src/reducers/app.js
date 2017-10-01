import { Map } from 'immutable';
import {
  SET_INITIAL_SAVINGS_AMOUNT,
  SET_MONTHLY_DEPOSIT_AMOUNT,
  SET_INTEREST_RATE,
  SET_CURRENCY
} from '../actions/app';

const initialState = Map({
  initialSavingsAmount: 1500,
  monthlyDepositAmount: 100,
  interestRate: 5,
  currency: {
    symbol: '£',
    code: 'GBP'
  }
});

export default (state = initialState, action) => {
  if (action.type === SET_INITIAL_SAVINGS_AMOUNT) {
    return state.set('initialSavingsAmount', action.amount);
  } else if (action.type === SET_MONTHLY_DEPOSIT_AMOUNT) {
    return state.set('monthlyDepositAmount', action.amount);
  } else if (action.type === SET_INTEREST_RATE) {
    return state.set('interestRate', action.rate);
  } else if (action.type === SET_CURRENCY) {
    return state.set('currency', action.currency);
  } else {
    return state;
  }
};
import { Map } from 'immutable';
import {
  SET_INITIAL_SAVINGS_AMOUNT,
  SET_MONTHLY_DEPOSIT_AMOUNT,
  SET_INTEREST_RATE,
  SET_CURRENCY,
  SET_MONTHLY_PROJECTION
} from '../actions/app';

const initialState = Map({
  initialSavingsAmount: 1500,
  monthlyDepositAmount: 100,
  interestRate: 5,
  currency: {
    symbol: '£',
    code: 'GBP'
  },
  monthlyProjection: [{
    month: 1,
    amount:500
  },{
    month: 2,
    amount:700
  },{
    month: 3,
    amount:1000
  },{
    month: 4,
    amount:1500
  }]
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
  } else if (action.type === SET_MONTHLY_PROJECTION) {
    return state.set('monthlyProjection', action.monthlyProjection);
  } else {
    return state;
  }
};
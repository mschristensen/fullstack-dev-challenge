export const SET_INITIAL_SAVINGS_AMOUNT = 'SET_INITIAL_SAVINGS_AMOUNT';

export function setInitialSavingsAmount(amount) {
  return { type: SET_INITIAL_SAVINGS_AMOUNT, amount };
}
export const SET_INITIAL_SAVINGS_AMOUNT = 'SET_INITIAL_SAVINGS_AMOUNT';
export const SET_MONTHLY_DEPOSIT_AMOUNT = 'SET_MONTHLY_DEPOSIT_AMOUNT';

export function setInitialSavingsAmount(amount) {
  return { type: SET_INITIAL_SAVINGS_AMOUNT, amount };
}

export function setMonthlyDepositAmount(amount) {
  return { type: SET_MONTHLY_DEPOSIT_AMOUNT, amount };
}
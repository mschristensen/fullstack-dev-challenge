export const SET_INITIAL_SAVINGS_AMOUNT = 'SET_INITIAL_SAVINGS_AMOUNT';
export const SET_MONTHLY_DEPOSIT_AMOUNT = 'SET_MONTHLY_DEPOSIT_AMOUNT';
export const SET_INTEREST_RATE = 'SET_INTEREST_RATE';

export function setInitialSavingsAmount(amount) {
  return {
    type: SET_INITIAL_SAVINGS_AMOUNT,
    amount: Number(amount)
  };
}

export function setMonthlyDepositAmount(amount) {
  return {
    type: SET_MONTHLY_DEPOSIT_AMOUNT,
    amount: Number(amount)
  };
}

export function setInterestRate(rate) {
  return {
    type: SET_INTEREST_RATE,
    rate: Number(rate)
  };
}
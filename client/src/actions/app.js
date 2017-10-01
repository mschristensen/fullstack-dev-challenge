export const SET_INITIAL_SAVINGS_AMOUNT = 'SET_INITIAL_SAVINGS_AMOUNT';
export const SET_MONTHLY_DEPOSIT_AMOUNT = 'SET_MONTHLY_DEPOSIT_AMOUNT';
export const SET_INTEREST_RATE = 'SET_INTEREST_RATE';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_MONTHLY_PROJECTION = 'SET_MONTHLY_PROJECTION';

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

export function setCurrency(currency) {
  return {
    type: SET_CURRENCY,
    currency
  };
}

export function setMonthlyProjection(monthlyProjection) {
  return {
    type: SET_MONTHLY_PROJECTION,
    monthlyProjection
  };
}

function dummyFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
}

export function getMonthlyProjection() {
  return function(dispatch, getState) {
    return dummyFetch().then(
      success => dispatch(setMonthlyProjection([1,2,3])),
      error => console.error(error)
    );
  };
}
import * as constants from './constants';

export const setBalance = (balance) => {
  return {
    type: constants.SET_BALANCE,
    payload: balance,
  };
};

export const deposit = (deposit) => {
  return {
    type: constants.DEPOSIT,
    payload: deposit,
  };
};

export const withdraw = (withdrawAmount) => {
  return {
    type: constants.WITHDRAW,
    payload: withdrawAmount,
  };
};

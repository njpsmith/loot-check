import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;

  const expectedAction = { type: constants.SET_BALANCE, payload: balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const deposit = 15;

  const expectedAction = { type: constants.DEPOSIT, payload: deposit };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action for withdrawing from the balance', () => {
  const withdrawAmount = 12;

  const expectedAction = { type: constants.WITHDRAW, payload: withdrawAmount };

  expect(actions.withdraw(withdrawAmount)).toEqual(expectedAction);
});

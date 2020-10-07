import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('sets a balance', () => {
      expect(
        balanceReducer(undefined, {
          type: constants.SET_BALANCE,
          payload: balance,
        })
      ).toEqual(balance);
    });

    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it('deposits into the balance', () => {
    const deposit = 20;
    const initialState = 5;

    expect(
      balanceReducer(initialState, {
        type: constants.DEPOSIT,
        payload: deposit,
      })
    ).toEqual(initialState + deposit);
  });

  it('withdraws from the balance', () => {
    const withdrawAmount = 5;
    const initialState = 50;

    expect(
      balanceReducer(initialState, {
        type: constants.WITHDRAW,
        payload: withdrawAmount,
      })
    ).toEqual(initialState - withdrawAmount);
  });
});

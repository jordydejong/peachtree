import { createReducer, on, Action } from '@ngrx/store';
import { createSuccess, initializeAppSuccess } from './actions';
import { AppState } from './interfaces';

export const initialState: AppState = {
  account: {
    name: '',
    balance: 0
  },
  transactions: []
};

// tslint:disable-next-line variable-name
const _appReducer = createReducer(
  initialState,

  on(createSuccess, (state, data) => {
    const newState: AppState = {
      ...state,
      transactions: [
        ...state.transactions,
        data
      ],
      account: {
        ...state.account,
        balance: state.account.balance - data.amount
      }
    };

    return newState;
  }),

  on(initializeAppSuccess, (state, data) => {
    const newState: AppState = data;
    return newState;
  }),

);

export function appReducer(state = initialState, action: Action) {
  return _appReducer(state, action);
}

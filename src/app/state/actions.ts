import { createAction, props } from '@ngrx/store';
import { TransferData, Transaction, Account } from '../interfaces';

export const INITIALIZE = '[App] Initialize';
export const INITIALIZE_SUCCESS = '[App] Initialize Success';

export const CREATE_TRANSACTIONS = '[Transaction] Create Transaction';
export const CREATE_TRANSACTIONS_SUCCESS = '[Transaction] Create Transaction Success';

export const createTransaction = createAction(CREATE_TRANSACTIONS, props<TransferData>());

export const createSuccess = createAction(
  CREATE_TRANSACTIONS_SUCCESS,
  props<Transaction>()
);

export const initializeApp = createAction(INITIALIZE);

export const initializeAppSuccess = createAction(
  INITIALIZE_SUCCESS,
  props<{ account: Account, transactions: Transaction[] }>()
);

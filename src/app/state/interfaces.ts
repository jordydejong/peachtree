import { Transaction, Account } from '../interfaces';

export interface AppState {
  account: Account;
  transactions: Transaction[];
}

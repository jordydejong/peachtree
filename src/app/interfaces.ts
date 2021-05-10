export enum TransactionType {
  CARD_PAYMENT = 'Card Payment',
  TRANSACTION = 'Transaction',
  ONLINE_TRANSFER = 'Online Transfer'
}

export interface Transaction {
  amount: number;
  categoryCode: string;
  merchant: string;
  merchantLogo?: string;
  transactionDate: number;
  transactionType: TransactionType;
}

export interface TransferData {
  target: string;
  amount: number;
}

export interface Account {
  balance: number;
  name: string;
}

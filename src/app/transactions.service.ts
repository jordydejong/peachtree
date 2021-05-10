import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { Transaction, TransferData, TransactionType } from './interfaces';
import { data as transactions } from '../mocks/transactions.json';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private httpClient: HttpClient) {}

  get() {
    // simulate http call
    return of(transactions.map(transaction => {
      return {
        ...transaction,
        amount: parseFloat(transaction.amount),
      } as Transaction;
    }));
  }

  add(data: TransferData) {
    if (data.amount <= 0) {
      return throwError('invalid amount');
    }

    // simulate http call / response
    const postResponse: Transaction = {
      amount: data.amount,
      categoryCode: '#ddd',
      transactionType: TransactionType.ONLINE_TRANSFER,
      merchant: data.target,
      transactionDate: new Date().getTime()
    };

    return of(postResponse);
  }
}

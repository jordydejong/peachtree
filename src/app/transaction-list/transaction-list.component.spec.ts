// tslint:disable no-any
import { of } from 'rxjs';
import { TransactionListComponent } from './transaction-list.component';
import { fakeAsync, tick } from '@angular/core/testing';

const mockTransactions = [
  {
    amount: '82.02',
    categoryCode: '#12a580',
    merchant: 'The Tea Lounge',
    merchantLogo: 'data:foo==',
    transactionDate: 1476933842000,
    transactionType: 'Card Payment'
  },
  {
    amount: '182.02',
    categoryCode: '#a2a580',
    merchant: 'Other Merchant',
    merchantLogo: 'data:baz==',
    transactionDate: 1476933843000,
    transactionType: 'Card Payment'
  },
];

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;

  const mockStore = {
    select: () => of(mockTransactions)
  } as any;

  beforeEach(async () => {
    component = new TransactionListComponent(
      mockStore
    );
  });

  it('creates successfully', () => {
    expect(component).toBeTruthy();
  });

  it('initially sorts transactions retrieved from store by date descending', fakeAsync(() => {
    tick(0);

    expect(component.sortedTransactions.length).toEqual(2);
    expect(component.sortedTransactions[0].transactionDate).toBeGreaterThan(component.sortedTransactions[1].transactionDate);
  }));
});

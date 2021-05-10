import { Component, OnDestroy, OnInit } from '@angular/core';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Transaction } from '../interfaces';
import { AppState } from '../state';

type SortField =  'transactionDate' | 'merchant' | 'amount';
type SortDirection = 'asc' | 'desc' ;
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnDestroy, OnInit {
  faSuitcase = faSuitcase;
  transactions: Transaction[] = [];
  sortedTransactions: Transaction[] = [];
  transactions$: Subscription;

  filterChange$: Subject<string> = new Subject<string>();
  filter = '';

  sortField: SortField = 'transactionDate';
  sortDirection: SortDirection = 'desc';

  constructor(
    private store: Store<{ app: AppState }>,
  ) {
    this.transactions$ = this.store
      .select(appState => appState.app.transactions)
      .subscribe(transactions => {
        this.transactions = transactions;
        this.sort();
      });
  }

  ngOnInit() {
    this.filterChange$
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(filter => {
        this.filter = filter;
      });
  }

  changeSort(field: SortField) {
    if (this.sortField === field) {
      this.sortDirection = (this.sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortField = field;
      this.sortDirection = 'desc';
    }

    this.sort();
  }

  sort() {
    // TODO move to service?
    this.sortedTransactions = this.transactions.slice().sort((transactionA, transactionB) => {
      if (transactionA[this.sortField] < transactionB[this.sortField]) {
        return (this.sortDirection === 'desc' ? 1 : -1);
      } else if (transactionA[this.sortField] > transactionB[this.sortField]) {
        return (this.sortDirection === 'desc' ? -1 : 1);
      }

      return 0;
    });
  }

  onFilterChange(event: KeyboardEvent) {
    const target = (event.target) as HTMLInputElement;
    this.filterChange$.next(target.value);
  }

  ngOnDestroy() {
    this.transactions$.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, createTransaction, initialState } from '../state/';
import { TransferData, Account } from '../interfaces';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit, OnDestroy {
  faSync = faSync;
  account$: Subscription;
  account: Account = initialState.account;

  transfer: TransferData = {
    target: '',
    amount: 0
  };

  constructor(private store: Store<{ app: AppState }>) {
    this.account$ = this.store
      .select(appState => appState.app.account)
      .subscribe(account => this.account = account);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.account$.unsubscribe();
  }

  onSubmit(data: TransferData): void {
    this.store.dispatch(createTransaction(data));
  }

}

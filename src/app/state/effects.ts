import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin } from 'rxjs';
import { map, exhaustMap, take } from 'rxjs/operators';
import { TransactionsService } from '../transactions.service';
import { AccountService } from '../account.service';
import * as actions from './actions';

@Injectable()
export class TransactionsEffects {

  constructor(
    private actions$: Actions,
    private transactionsService: TransactionsService,
    private accountService: AccountService
  ) { }

  initializeApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.initializeApp),
      exhaustMap(action => {
        return forkJoin({
          account: this.accountService.get(),
          transactions: this.transactionsService.get()
        }).pipe(
          take(1),
          map(responses => actions.initializeAppSuccess(responses))
        );
      })
    )
  );

  createTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createTransaction),
      exhaustMap(action =>
        this.transactionsService.add(action).pipe(
          take(1),
          map(response => actions.createSuccess(response))
        )
      )
    )
  );
}

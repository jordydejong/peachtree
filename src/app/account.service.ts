import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Account } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() {

  }

  get() {
    // simulate http call
    return of({
      name: 'Free Checking (4692)',
      balance: 5824.76
    } as Account);
  }
}

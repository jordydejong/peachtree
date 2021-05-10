import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initializeApp, AppState } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<{ app: AppState }>) { }

  ngOnInit(): void {
    this.store.dispatch(initializeApp());
  }
}

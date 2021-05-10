import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faSync, faSuitcase, fas } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducer, TransactionsEffects } from './state';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { HeaderComponent } from './header/header.component';
import { MerchantFilterPipe } from './merchant-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    TransactionListComponent,
    HeaderComponent,
    MerchantFilterPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([TransactionsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faSync);
    library.addIcons(faSuitcase);
  }
}

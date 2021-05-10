import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from './interfaces';

@Pipe({
  name: 'merchantFilter'
})
export class MerchantFilterPipe implements PipeTransform {

  transform(transactions: Transaction[], filter: string) {
    if (!filter || filter.trim() === '') {
      return transactions;
    }

    return transactions.filter(transaction => transaction.merchant.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }

}

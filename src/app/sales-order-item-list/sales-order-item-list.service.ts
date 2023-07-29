import { Injectable } from '@angular/core';
import { SalesItem } from '../models/SalesItem';
import { Observable, of } from 'rxjs';
import { SALES_ITEM_DATA } from 'src/assets/SalesItens-mock';

@Injectable({
  providedIn: 'root',
})
export class SalesOrderItemListService {
  constructor() {}

  get(id: number): Observable<SalesItem[]> {
    const dbResult = SALES_ITEM_DATA.filter(
      (itens: SalesItem) => itens.salesOrderId == id
    );

    return of(dbResult);
  }
}

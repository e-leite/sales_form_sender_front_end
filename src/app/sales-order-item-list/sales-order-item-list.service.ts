import { Injectable } from '@angular/core';
import { SalesItem } from '../models/SalesItem';
import { Observable, of } from 'rxjs';
import { SALES_ITEM_DATA } from 'src/assets/SalesItens-mock';

@Injectable({
  providedIn: 'root',
})
export class SalesOrderItemListService {
  constructor() {}

  save(salesItem: SalesItem): void {
    const id = SALES_ITEM_DATA.length + 1;

    salesItem.id = id;

    SALES_ITEM_DATA.push(salesItem);
  }

  get(id: number): Observable<SalesItem[]> {
    const dbResult = SALES_ITEM_DATA.filter(
      (itens: SalesItem) => itens.salesOrderId == id
    );

    return of(dbResult);
  }

  delete(salesItem: SalesItem): Observable<void> {
    const findedItemIndex = SALES_ITEM_DATA.findIndex(
      (item) => item.id == salesItem.id
    );

    SALES_ITEM_DATA.splice(findedItemIndex, 1);

    return of(void 0);
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  get(): Observable<Product[]> {
    const products: Product[] = [];

    for (let i = 1; i < 50; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        type: Math.floor(Math.random() * 10) % 2 == 0 ? 'Type 1' : 'Type 2',
        price: parseFloat((Math.random() * 10).toFixed(2)),
      });
    }
    return of(products);
  }
}

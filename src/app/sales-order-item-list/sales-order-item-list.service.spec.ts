import { TestBed } from '@angular/core/testing';

import { SalesOrderItemListService } from './sales-order-item-list.service';

describe('SalesOrderItemListService', () => {
  let service: SalesOrderItemListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesOrderItemListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

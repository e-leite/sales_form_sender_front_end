import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderItemListComponent } from './sales-order-item-list.component';

describe('SalesOrderItemListComponent', () => {
  let component: SalesOrderItemListComponent;
  let fixture: ComponentFixture<SalesOrderItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOrderItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

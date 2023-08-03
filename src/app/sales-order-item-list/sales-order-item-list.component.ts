import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { SalesItem } from '../models/SalesItem';
import { SalesOrderItemListService } from './sales-order-item-list.service';

@Component({
  selector: 'app-sales-order-item-list',
  templateUrl: './sales-order-item-list.component.html',
  styleUrls: ['./sales-order-item-list.component.scss'],
})
export class SalesOrderItemListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private salesOrderItemListService: SalesOrderItemListService
  ) {}

  displayedColumns = [
    'productId',
    'productName',
    'productType',
    'quantity',
    'productPrice',
    'totalPrice',
    'action',
  ];

  salesOrderId!: number;
  salesItens: SalesItem[] = [];

  dataSource = new MatTableDataSource<SalesItem>();

  ngOnInit(): void {
    this.salesOrderId = parseFloat(this.route.snapshot.params['id']);
    this.getSalesOrderItens();
    console.log(this.dataSource.data);
  }

  getSalesOrderItens(): void {
    this.salesOrderItemListService.get(this.salesOrderId).subscribe((itens) => {
      this.dataSource.data = itens;
      // this.dataSource.data = PRODUCT_DATA;
    });
  }

  getTotalPrice(): number {
    return this.dataSource.data
      .map((item) => item.totalPrice)
      .reduce((accumulator, value) => accumulator + value, 0);
  }

  onDelete(salesItem: SalesItem): void {
    this.salesOrderItemListService.delete(salesItem).subscribe(() => {
      this.getSalesOrderItens();
    });
  }
}

const PRODUCT_DATA: SalesItem[] = [
  {
    id: 1,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 2,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 3,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 4,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 5,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 6,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 7,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 8,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 9,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
  {
    id: 10,
    salesOrderId: 1,
    productId: 1,
    productName: 'Product 1',
    productType: 'Type 1',
    quantity: 1,
    productPrice: 5.51,
    totalPrice: 5.51,
  },
];

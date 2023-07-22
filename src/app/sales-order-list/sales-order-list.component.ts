import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.scss'],
})
export class SalesOrderListComponent implements OnInit, AfterViewInit {
  constructor() {}

  displayedColumns: string[] = [
    'id',
    'customerName',
    'customerCity',
    'customerState',
    'saleDate',
    'invoiceDate',
    'paymentTerm',
    'shipBase',
    'shipmentType',
    'status',
    'action',
  ];

  salesOrders!: SalesOrder[];

  salesOrderStatus: string[] = ['Rascunho', 'Enviado'];

  dataSource = new MatTableDataSource<SalesOrder>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.salesOrders = this.getSalesOrders();
    this.dataSource.data = this.salesOrders;
  }

  getSalesOrders(): SalesOrder[] {
    const salesOrders = [];

    for (let i = 1; i < 21; i++) {
      salesOrders.push({
        id: i,
        customerName: `customer ${i}`,
        customerCity: 'Goiânia',
        customerState: 'GO',
        saleDate: new Date(),
        invoiceDate: new Date(),
        paymentTerm: '30/60',
        shipBase: 'base 1',
        shipmentType: 'Por conta do cliente',
        addressHasUpavedRoad: true,
        unpavedRoadSize: 7,
        shippingCompanyName: null,
        shippingCompanyContactName: null,
        shippingCompanyPhone: null,
        shippingCompanyEmail: null,
        status: i % 2 == 0 ? 'Rascunho' : 'Enviado',
      });
    }

    return salesOrders;
  }
}

export interface SalesOrder {
  id: number;
  customerName: string;
  customerCity: string;
  customerState: string;
  saleDate: Date;
  invoiceDate: Date;
  paymentTerm: string;
  shipBase: string;
  shipmentType: string;
  addressHasUpavedRoad: boolean;
  unpavedRoadSize: number;
  shippingCompanyName: string | null;
  shippingCompanyContactName: string | null;
  shippingCompanyPhone: string | null;
  shippingCompanyEmail: string | null;
  status: string;
}

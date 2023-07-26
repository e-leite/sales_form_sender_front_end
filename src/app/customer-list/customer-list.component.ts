import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CustomerListComponent>) {}

  customers: Customer[] = [];

  dataSource = new MatTableDataSource<Customer>(this.customers);
  displayedColumns = ['Nome'];

  ngOnInit(): void {
    this.customers = this.getCustomers();
    this.dataSource.data = this.customers;
  }

  getRow(customer: Customer): void {
    this.dialogRef.close(customer);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCustomers(): Customer[] {
    const customers: Customer[] = [];

    for (let i = 1; i < 500; i++) {
      customers.push({
        id: i,
        name: `Customer ${i}`,
        city: 'any_city',
        state: 'any_state',
      });
    }

    return customers;
  }
}

interface Customer {
  id: number;
  name: string;
  city: string;
  state: string;
}

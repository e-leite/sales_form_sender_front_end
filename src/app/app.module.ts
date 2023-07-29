import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SalesOrderFormComponent } from './sales-order-form/sales-order-form.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { SalesOrderItemListComponent } from './sales-order-item-list/sales-order-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesOrderListComponent,
    SalesOrderFormComponent,
    CustomerListComponent,
    ProductsFormComponent,
    SalesOrderItemListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

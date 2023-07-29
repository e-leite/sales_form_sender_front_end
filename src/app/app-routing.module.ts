import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderFormComponent } from './sales-order-form/sales-order-form.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { SalesOrderItemListComponent } from './sales-order-item-list/sales-order-item-list.component';

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'sales', component: SalesOrderListComponent },
      { path: 'sales/new', component: SalesOrderFormComponent },
      { path: 'sales/:id/products/add', component: ProductsFormComponent },
      {
        path: 'sales/:id/products/list',
        component: SalesOrderItemListComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

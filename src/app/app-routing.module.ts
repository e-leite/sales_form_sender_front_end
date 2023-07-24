import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { SalesOrderFormComponent } from './sales-order-form/sales-order-form.component';

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'sales', component: SalesOrderListComponent },
      { path: 'sales/new', component: SalesOrderFormComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

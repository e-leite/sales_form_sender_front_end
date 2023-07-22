import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';

const routes: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'sales', component: SalesOrderListComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

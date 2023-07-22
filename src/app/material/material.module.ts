import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule {}

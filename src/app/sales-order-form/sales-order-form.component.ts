import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-sales-order-form',
  templateUrl: './sales-order-form.component.html',
  styleUrls: ['./sales-order-form.component.scss'],
})
export class SalesOrderFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  salesOrderStatus: string[] = ['Rascunho', 'Enviado'];
  paymentTerms: string[] = ['01', '30/60', '30/60/90'];
  shipmentTypes: any[] = [
    {
      id: 1,
      type: 'Por conta do cliente',
    },
    {
      id: 2,
      type: 'Por conta da empresa',
    },
  ];
  selectedshipmentTypes = 'Por conta da empresa';
  hasUpavedRoadOptions: string[] = ['Sim', 'Não'];
  unpavedRoadSelectedOption = 'Sim';

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      customerId: [null],
      customerName: [null],
      customercity: [null],
      customerState: [null],
      paymentTerm: [null],
      shipBase: [null],
      saleDate: [new Date()],
      invoiceDate: [null],
      shipmentType: [null],
      addressHasUpavedRoad: [null],
      unpavedRoadSize: [null],
      shippingCompanyName: [null],
      shippingCompanyContactName: [null],
      shippingCompanyPhone: [null],
      shippingCompanyEmail: [null],
    });

    this.form.controls['customerName'].disable();
    this.form.controls['customercity'].disable();
    this.form.controls['customerState'].disable();
  }

  onSave(): void {
    console.log(this.form.value);
  }

  onCancel(): void {
    window.history.back();
  }

  onShipmentTypeChange(event: string): void {
    this.selectedshipmentTypes = event;

    const fieldsToReset = [
      'shippingCompanyName',
      'shippingCompanyContactName',
      'shippingCompanyPhone',
      'shippingCompanyEmail',
      'addressHasUpavedRoad',
      'unpavedRoadSize',
    ];

    this.resetFields(fieldsToReset);
  }

  onUnpavedRoadSelectedOptionChange(event: string): void {
    this.unpavedRoadSelectedOption = event;

    const fieldToReset = ['unpavedRoadSize'];

    if (event == 'Não') {
      this.resetFields(fieldToReset);
    }
  }

  resetFields(fieldsToReset: string[]): void {
    fieldsToReset.forEach((field) => this.form.patchValue({ [field]: null }));
  }

  callSearchCustomer(): void {
    this.dialog
      .open(CustomerListComponent, { width: '500px' })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.form.patchValue({
            customerId: result.id,
            customerName: result.name,
            customercity: result.city,
            customerState: result.state,
          });
        }
      });
  }
}

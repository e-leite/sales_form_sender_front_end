import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { SALES_ITEM_DATA } from 'src/assets/SalesItens-mock';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  products: Product[] = [];

  dataSource = new MatTableDataSource<Product>(this.products);
  displayedColumns = ['Nome', 'Tipo'];

  form!: FormGroup;

  salesOrderId!: number;
  productId: number | null = null;

  productName: string | null = '';
  productPrice: number | null = null;
  totalPrice: number | null = null;

  ngOnInit(): void {
    this.salesOrderId = parseFloat(this.route.snapshot.params['id']);

    this.products = this.getProducts();
    this.dataSource.data = this.products;

    this.form = this.formBuilder.group({
      salesOrderId: [null],
      productId: [null],
      productName: [null],
      productType: [null],
      quantity: [null],
      productPrice: [null],
      totalPrice: [null],
    });
  }

  getProducts(): Product[] {
    const products: Product[] = [];

    for (let i = 1; i < 50; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        type: Math.floor(Math.random() * 10) % 2 == 0 ? 'Type 1' : 'Type 2',
        price: parseFloat((Math.random() * 10).toFixed(2)),
      });
    }
    return products;
  }

  onSelectProduct(product: Product): void {
    this.form.patchValue({
      salesOrderId: this.salesOrderId,
      productId: product.id,
      productName: product.name,
      productType: product.type,
      productPrice: product.price,
    });

    this.productId = product.id;
    this.productName = product.name;
    this.productPrice = product.price;

    const quantity = this.form.controls['quantity']?.value;

    this.calculateTotalPrice(quantity, product.price);
  }

  calculateTotalPrice(quantity: number, price: number): void {
    this.form.controls['totalPrice'].setValue(price * quantity);
    this.totalPrice = price * quantity;
  }

  onInputQuantity(event: Event): void {
    const price = this.form.get('productPrice')?.value;
    const quantity = parseFloat((event.target as HTMLInputElement).value);

    this.calculateTotalPrice(quantity, price);
  }

  onSave(): void {
    SALES_ITEM_DATA.push(this.form.value);
    this.form.reset();
    this.productName = null;
    this.productPrice = null;
    console.log(SALES_ITEM_DATA);
  }

  onCancel(): void {
    this.form.reset();
    this.productName = null;
    this.productPrice = null;
  }
}

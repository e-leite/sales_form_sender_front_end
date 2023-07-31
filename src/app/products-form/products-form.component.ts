import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../shared/products.service';
import { SalesOrderItemListService } from '../sales-order-item-list/sales-order-item-list.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private salesOrderItemListService: SalesOrderItemListService
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

  selectedProduct!: Product;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      salesOrderId: [null],
      productId: [null],
      productName: [null],
      productType: [null],
      quantity: [null],
      productPrice: [null],
      totalPrice: [null],
    });

    this.salesOrderId = parseFloat(this.route.snapshot.params['id']);

    this.productsService.get().subscribe((products) => {
      this.dataSource.data = products;
      this.selectedProduct = products[0];
      this.onSelectProduct(this.selectedProduct);
    });
  }

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;

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
    this.salesOrderItemListService.save(this.form.value);
    this.form.reset();

    this.onSelectProduct(this.selectedProduct);
  }

  onCancel(): void {
    this.form.reset();

    this.onSelectProduct(this.selectedProduct);
  }
}

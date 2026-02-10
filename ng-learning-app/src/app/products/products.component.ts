import { Component } from '@angular/core';
import { DataService, Product } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  showOnlyInStock = false;
  products: Product[];

  constructor(private dataService: DataService) {
    this.products = this.dataService.getProducts();
  }

  get filteredProducts(): Product[] {
    return this.showOnlyInStock
      ? this.products.filter(p => p.inStock)
      : this.products;
  }

  toggleStockFilter(): void {
    this.showOnlyInStock = !this.showOnlyInStock;
  }

  updateStock(product: Product): void {
    this.dataService.toggleProductStock(product.id);
    this.products = [...this.dataService.getProducts()]; // Update products array
  }
}

import { Component, Input, OnChanges, OnInit, output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { HoverShadowDirective } from '../../directives/hover-shadow.directive';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { FormsModule } from '@angular/forms';
import { BuyButtonComponent } from '../buy-button/buy-button.component';
import { RouterModule } from '@angular/router';
import { StaticDataService } from '../services/static-data.service';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    HoverShadowDirective,
    ShortenPipe,
    FormsModule,
    BuyButtonComponent,
    RouterModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges, OnInit {
  filteredProducts: IProduct[] = [];
  TotalPrice: number;
  selectedProduct!: IProduct;
  @Input() selectedCategory: string = '';
  Total = output<number>();
  constructor(private staticData: StaticDataService) {
    this.TotalPrice = 0;
  }

  ngOnChanges(): void {
    this.filterByCategory();
  }

  ngOnInit(): void {
    this.filteredProducts = this.staticData.getAllProducts();
  }

  filterByCategory() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.staticData.getAllProducts();
    } else {
      this.filteredProducts = this.staticData.getProductByCategory(
        this.selectedCategory
      );
    }
  }

  incrementQuantity(input: HTMLInputElement, maxStock: number) {
    const currentValue = +input.value;
    if (currentValue < maxStock) {
      input.value = (currentValue + 1).toString();
    }
  }

  decrementQuantity(input: HTMLInputElement) {
    const currentValue = +input.value;
    if (currentValue > 1) {
      input.value = (currentValue - 1).toString();
    }
  }

  Buy(count: any, prd: IProduct) {
    if (prd.stock < count) {
      alert('out of stock');
      return;
    }
    prd.stock -= count;
    this.TotalPrice += count * prd.price;
    this.Total.emit(this.TotalPrice);
  }

  deleteProduct(id: number) {
    this.staticData.deleteProductById(id);
    this.filteredProducts = this.staticData.getAllProducts();
    this.filteredProducts = this.filteredProducts.filter(
      (prd) => prd.category === this.selectedCategory
    );
  }

  saveChanges(product: IProduct) {
    this.staticData.updateProduct(product);
  }
}

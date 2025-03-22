import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { IProduct } from '../../Models/iproduct';
import { ICategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-master-products',
  imports: [ProductsComponent, CommonModule, FormsModule],
  templateUrl: './master-products.component.html',
  styleUrl: './master-products.component.css',
})
export class MasterProductsComponent {
  catList: ICategory[];
  selectedCategory: string;
  TotalProductsPrice: number;
  constructor() {
    this.selectedCategory = 'all';
    this.catList = [
      { id: 0, name: 'all' },
      { id: 1, name: 'beauty' },
      { id: 2, name: 'fragrances' },
      { id: 3, name: 'groceries' },
    ];
    this.TotalProductsPrice = 0;
  }

  TotalPrice(total: number) {
    this.TotalProductsPrice = total;
  }
}

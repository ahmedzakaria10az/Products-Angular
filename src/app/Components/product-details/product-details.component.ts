import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { StaticDataService } from '../services/static-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | null = null;
  ProductId: number = 0;
  // prdList: IProduct[];
  constructor(
    private active: ActivatedRoute,
    private staticData: StaticDataService
  ) {
    this.ProductId = +this.active.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.product = this.staticData.getProductDetailsById(this.ProductId);
  }

  // getProductDetailsById(): IProduct | null {
  //   return this.prdList.find((prd) => prd.id === this.ProductId) || null;
  // }
}

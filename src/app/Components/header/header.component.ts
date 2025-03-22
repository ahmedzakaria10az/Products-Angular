import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaticDataService } from '../services/static-data.service';
import { IProduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent  {
  product: IProduct = {
    id: 0,
    title: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
    thumbnail: '',
  };
  constructor(private staticData: StaticDataService) {}


  addProduct() {
    this.staticData.postProduct(this.product);
  }
}



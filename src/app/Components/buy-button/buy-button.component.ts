import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  imports: [],
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.css',
})
export class BuyButtonComponent {
  @Input() product!: IProduct;
  @Input() quantity: number = 1;
  @Input() disabled: boolean = false;
  @Output() purchase = new EventEmitter<{
    product: IProduct;
    quantity: number;
  }>();

  onBuy() {
    this.purchase.emit({
      product: this.product,
      quantity: this.quantity,
    });
  }
}

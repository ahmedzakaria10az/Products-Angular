import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DynamicDataService } from '../services/dynamic-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping',
  imports: [HttpClientModule, RouterModule],
  providers: [DynamicDataService],
  standalone: true,
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css',
})
export class ShoppingComponent implements OnInit, OnDestroy, DoCheck {
  data: any[] = [];
  private subscriptions = new Subscription();

  constructor(
    private dynamicData: DynamicDataService,
    private router: Router
  ) {}

  ngDoCheck(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.data);
  }

  getAll() {
    this.dynamicData.getAllData().subscribe((prds) => (this.data = prds));
  }
  Deleteprd(id: number) {
    this.dynamicData.deleteDataBYID(id).subscribe(() => this.getAll());
  }

  viewProduct(id: number) {
    this.router.navigate(['/shop', id]);
  }
}

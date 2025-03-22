import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from '../services/dynamic-data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-details',
  imports: [HttpClientModule, RouterModule],
  providers: [DynamicDataService],
  templateUrl: './shopping-details.component.html',
  styleUrl: './shopping-details.component.css',
})
export class ShoppingDetailsComponent implements OnInit {
  id: number = 0;
  product: any;
  constructor(
    private dynamicData: DynamicDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getDataByID();
  }

  getId() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  getDataByID() {
    this.dynamicData.getDataByID(this.id).subscribe((p) => (this.product = p));
  }
}

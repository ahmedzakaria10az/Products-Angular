import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from '../services/dynamic-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-edit-prd',
  imports: [FormsModule, HttpClientModule, RouterModule],
  providers: [DynamicDataService],
  templateUrl: './add-edit-prd.component.html',
  styleUrl: './add-edit-prd.component.css',
})
export class AddEditPrdComponent implements OnInit {
  newPrd: any = {};
  id: any;
  constructor(
    private dynamicData: DynamicDataService,
    private router: Router,
    private active: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getID();
    console.log(this.id);
    if (this.id) {
      this.getDataById();
    }
  }

  getID() {
    this.id = Number(this.active.snapshot.paramMap.get('id'));
  }
  getDataById() {
    this.dynamicData.getDataByID(this.id).subscribe((p) => (this.newPrd = p));
  }

  Add() {
    this.dynamicData.addNewData(this.newPrd).subscribe((p) => console.log(p));
    this.router.navigateByUrl('/shop');
  }

  Edit() {
    this.dynamicData
      .EditData(this.newPrd, this.id)
      .subscribe((p) => console.log(p));
    this.router.navigateByUrl('/shop');
  }
}

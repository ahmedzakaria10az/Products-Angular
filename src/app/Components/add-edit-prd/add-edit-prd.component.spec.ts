import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPrdComponent } from './add-edit-prd.component';

describe('AddEditPrdComponent', () => {
  let component: AddEditPrdComponent;
  let fixture: ComponentFixture<AddEditPrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditPrdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

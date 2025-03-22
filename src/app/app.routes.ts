import { Routes } from '@angular/router';
import { MasterProductsComponent } from './Components/master-products/master-products.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { SliderComponent } from './Components/slider/slider.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SignupFormComponent } from './Components/forms/signup-form/signup-form.component';
import { ShoppingComponent } from './Components/shopping/shopping.component';
import { ShoppingDetailsComponent } from './Components/shopping-details/shopping-details.component';
import { AddEditPrdComponent } from './Components/add-edit-prd/add-edit-prd.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { log } from 'node:console';
import { LoginComponent } from './Components/login/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: MasterProductsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'shop', component: ShoppingComponent },
  { path: 'shop/:id', component: ShoppingDetailsComponent },
  { path: 'addedit', component: AddEditPrdComponent },
  { path: 'addedit/:id', component: AddEditPrdComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:id', component: UserDetailsComponent },
  { path: '**', component: ErrorComponent },
];

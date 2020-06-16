import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { SigninComponent } from './account/signin/signin.component';
import { RegisterComponent } from './account/register/register.component';


const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "add-product", component: AddProductComponent },
  { path: "login", component: SigninComponent },
  { path: "signup", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

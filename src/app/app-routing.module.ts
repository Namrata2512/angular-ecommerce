import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { JsonloginComponent } from './component/jsonlogin/jsonlogin.component';
import { JsonsignupComponent } from './component/jsonsignup/jsonsignup.component';
import { ProductComponent } from './component/product/product.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  
  // {path:'',redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'register',component:RegisterComponent},
  {path:'jsonsignup', component:JsonsignupComponent},
  {path:'jsonlogin', component:JsonloginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,  canActivate : [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

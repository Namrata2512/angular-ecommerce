import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { JsonloginComponent } from './component/jsonlogin/jsonlogin.component';
import { JsonsignupComponent } from './component/jsonsignup/jsonsignup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    JsonloginComponent,
    JsonsignupComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: () => {
    //       return localStorage.getItem('access_token');
    //     },
    //     allowedDomains: ['localhost'],
    //     disallowedRoutes:['localhost/auth/login']
    //   }
    // })
 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

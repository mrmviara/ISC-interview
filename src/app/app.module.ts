import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsService } from './services/products.service';
import { AppRoutingModule } from './app-routing.module';
import { JwtService } from './services/jwt.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    // HttpClientModule,
    RouterModule,
    ],
  providers: [
    ProductsService,
    JwtService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

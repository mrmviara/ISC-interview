import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { ProductDetailComponent } from './products-list/product-item/product-detail/product-detail.component';
import { LogoutComponent } from '../logout/logout.component';
import { ProductAddComponent } from './products-list/product-item/product-add/product-add.component';
import { ProductEditComponent } from './products-list/product-item/product-edit/product-edit.component';

@NgModule({
	declarations: [
		ProductsListComponent,
		ProductDetailComponent,
		ProductAddComponent,
		ProductEditComponent,
		ProductItemComponent,
		LogoutComponent
	],
	imports: [
		CommonModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule ,
		RouterModule,
		ProductsRoutingModule,

	]
})
export class ProductsModule { }

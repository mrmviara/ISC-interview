import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
	{
		path: 'products',
		component: ProductsListComponent,
		canActivate: [AuthGuard]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule { }

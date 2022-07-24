import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AuthGuard} from './core/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AuthGuard } from './services/auth-guard.service';
import { NoAuthGuard } from './services/no-auth-guard.service';

	/*we have tow part in app first some module without guard and
	fix parts(i.e sideBar) and
	another with authGuard
	and fix parts like dahshborad and  */
const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path: 'login',
		component: LoginComponent,
		canActivate: [NoAuthGuard]
	},
	{ path: '**', redirectTo: 'login' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

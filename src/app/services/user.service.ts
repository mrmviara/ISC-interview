import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { JwtService } from "./jwt.service";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
	private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
	public isAuthenticated = this.isAuthenticatedSubject.asObservable();

	constructor(
		private router: Router,
		private jwtService: JwtService
	) {}

	populate() {
		this.isAuthenticatedSubject.next(true);
	}

	setAuth(loginResponse: { accessToken: string; refreshToken: string }) {
		this.jwtService.saveToken(loginResponse.accessToken);
		this.isAuthenticatedSubject.next(true);
	}

	refreshToken(token: string): void {
		this.jwtService.saveToken(token);
		this.isAuthenticatedSubject.next(true);
	}

	purgeAuth() {
		// this.cache.clean();
		this.jwtService.destroyToken();
		this.isAuthenticatedSubject.next(false);
		this.router.navigateByUrl("public/login");
	}

	saveUserInfo(role: string, username: string){
		localStorage.setItem('user-username', username);
		localStorage.setItem('user-role', role);
	}

	getUserInfo(){
		return localStorage.getItem('user-username');
	}

	getUserRole(){
		return localStorage.getItem('user-role');
	}
}

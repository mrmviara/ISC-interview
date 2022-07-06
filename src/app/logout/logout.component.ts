import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
	username: any;

	constructor(
		private jwtService: JwtService,
		private router: Router,
		private userService: UserService
	){
		this.username = userService.getUserInfo();
	}

	ngOnInit(): void {
	}

	logout(){
		this.jwtService.destroyToken();
		this.router.navigateByUrl('login');
	}

}

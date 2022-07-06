import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	authForm: FormGroup;
	seletedValue: string = "admin";

	constructor(
		private jwtService: JwtService,
		private fb: FormBuilder,
		private router: Router,
		private userService: UserService
	){ 
		this.authForm = this.fb.group({
			username: [
				"",
				[Validators.required],
			],
			password: [
				"",
				[Validators.required]
			],
			role: [
				"",
				[Validators.required]
			],
		});
	}

	ngOnInit(): void {
	}

	public onSubmitLoginForm(data: any){
		this.jwtService.saveToken('xxxxx.yyyyy.zzzzz');
		this.userService.saveUserInfo(data.role, data.username)
		this.router.navigateByUrl('products');
	}

}

import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from 'src/app/products/products';
import { JwtService } from 'src/app/services/jwt.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
	productAdd: FormGroup;
	productAddClasses: any; 

	@Input() sentProductAddClasses: object;
	@Output() addedProduct = new EventEmitter<Product>();

	constructor(
		private jwtService: JwtService,
		private fb: FormBuilder,
		private router: Router,
		private userService: UserService
	){ 
		this.productAdd = this.fb.group({
			name: [
				"",
				[Validators.required],
			],
			description: [
				"",
				[Validators.required]
			],
			price: [
				"",
				[Validators.required]
			],
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if(changes['sentProductAddClasses'].currentValue){
			this.productAddClasses = changes['sentProductAddClasses'].currentValue;
		}
		
	}

	ngOnInit(): void {
	}

	public onSubmitProductAddForm(data: any){
		this.addedProduct.emit(data);
		this.closeProductAdd();
		this.productAdd.reset();
	}

	closeProductAdd(){
		this.productAddClasses.active =  false;
	}

}

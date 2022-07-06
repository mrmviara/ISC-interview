import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Product } from 'src/app/products/products';
import { JwtService } from 'src/app/services/jwt.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-product-edit',
	templateUrl: './product-edit.component.html',
	styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
	productEdit: FormGroup;
	productEditClasses: any; 

	@Input() product: Product;
	@Input() sentProductEditClasses: object;
	@Output() updatedProduct = new EventEmitter<Product>();

	constructor(
		private jwtService: JwtService,
		private fb: FormBuilder,
		private router: Router,
		private userService: UserService
		) { 
	}

	ngOnChanges(changes: SimpleChanges): void {
		if(changes['sentProductEditClasses']){
			this.productEditClasses = changes['sentProductEditClasses'].currentValue;
		}
		if(changes['product']){
			this.product = changes['product'].currentValue;
			this.productEdit = this.fb.group({
				name: [
					this.product.name,
					[Validators.required],
				],
				description: [
					this.product.description,
					[Validators.required]
				],
				price: [
					this.product.price,
					[Validators.required]
				],
			});
		}
	}

	ngOnInit(): void {
	}

	public onSubmitProductEditForm(data: any){
		this.updatedProduct.emit({
			...data,
			id: this.product.id
		});
		this.closeProductEdit();
	}

	closeProductEdit(){
		this.productEditClasses.active =  false;
	}

}

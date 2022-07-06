import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Product } from 'src/app/products/products';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	@Input() product: Product;
	@Input() sentProductDetailClasses: object;

	productDetailClasses: any; 

	constructor() { }

	ngOnChanges(changes: SimpleChanges): void {
		if(changes['sentProductDetailClasses']){
			this.productDetailClasses = changes['sentProductDetailClasses'].currentValue;
		}
	}

	ngOnInit(): void {
	}

	closeProductDetail(){
		this.productDetailClasses.active = false;
	}

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../products';

@Component({
	selector: 'app-product-item',
	templateUrl: './product-item.component.html',
	styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
	@Input() product: Product;
	@Input() isAdmin: boolean;
	@Output() sharedProduct = new EventEmitter<Product>();
	@Output() editableProduct = new EventEmitter<Product>();
	@Output() deletedProductId = new EventEmitter<number>();
	
	constructor() { }

	ngOnInit(): void {
	}

	openProductDetail() {
		this.sharedProduct.emit(this.product);
	}
	
	openProductEdit() {
		this.editableProduct.emit(this.product);
	}

	onDeleteProduct(){
		if(confirm('Are you sure to delete this product?!')){
			this.deletedProductId.emit(this.product.id);
		}
	}

}

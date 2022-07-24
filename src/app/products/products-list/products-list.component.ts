import { Component, Input, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import { Product } from '../products';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
	isLogin: boolean = false;
	isAdmin: boolean = false;
	productsList : Product[] = [];
	product: Product;
	productDetailClasses: object = {}
	productAddClasses: object = {}
	productEditClasses: object = {}
	lastId: number = 0;

	constructor(
		private jwtService: JwtService,
		private productsService: ProductsService,
		private userService: UserService,
	){
		if(this.jwtService.getToken()){
			this.isLogin = true;
		}
		if(this.userService.getUserRole() === 'admin'){
			this.isAdmin = true;
		}
	}

	ngOnInit(): void {
		this.productsList = this.productsService.getProducts();
	}

	openProductDetail(product: Product){
		this.product = product;
		this.productDetailClasses = {
			'active': true
		}
	}

	openProductAdd(){
		this.productAddClasses = {
			'active': true
		}
	}

	onAddProduct(addedProduct: Product){
		this.lastId = this.productsList[this.productsList.length - 1].id;
		this.productsList.push({
			...addedProduct,
			id: this.lastId + 1
		});
	}

	openProductEdit(product: Product){
		this.product = product;
		this.productEditClasses = {
			'active': true
		}
	}

	onEditProduct(updatedProduct: Product){
		this.productsList = this.productsList.map(product => {
			if(product.id === updatedProduct.id){
				return {
					...product,
					name: updatedProduct.name,
					description: updatedProduct.description,
					price: updatedProduct.price
				};
			}
			return product;
		});
	}

	deleteProduct(deletedProductId: number){
		this.productsList = this.productsList.filter(product => product.id != deletedProductId);
	}
	
}

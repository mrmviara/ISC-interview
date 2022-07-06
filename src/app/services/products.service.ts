import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	products: any = [
		{
			id: 1,
			name: "my first product",
			description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quaerat labore doloribus deleniti vel repellat exercitationem consequatur! Non, laborum est porro ex cupiditate amet quam quas iusto odit, doloribus dolor?",
			price: 32000
		},
		{
			id: 2,
			name: "the second one",
			description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, quaerat labore doloribus deleniti vel repellat exercitationem consequatur! Non, laborum est porro ex cupiditate amet quam quas iusto odit, doloribus dolor?",
			price: 322000
		},
	];

	constructor() { }

	getProducts() {
		return this.products
	}
}

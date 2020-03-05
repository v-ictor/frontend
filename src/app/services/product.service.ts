import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct: Product;
  products: Product[];
  readonly URL_API = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { 
     this.selectedProduct = new Product();
  }

  getProduct(){
    return this.http.get(this.URL_API);
  }

  postProduct(product: Product){
    return this.http.post(this.URL_API, product);
  }

  deleteProduct(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}

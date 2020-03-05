import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

declare var M: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  addProduct(form: NgForm){
    this.productService.postProduct(form.value)
      .subscribe(res => {
        M.toast({html: 'Producto Guardado'});
        this.resetForm(form);
        this.getProducts();
      });
  }

  getProducts(){
    this.productService.getProduct()
      .subscribe(res => {
        this.productService.products = res as Product[];
      });
  }

  deleteProduct(_id: string){
    if(confirm('Esta seguro de eliminar el producto.')){
      this.productService.deleteProduct(_id)
      .subscribe(res => {
        M.toast({html: 'Producto Eliminado'});
        this.getProducts();
      });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}

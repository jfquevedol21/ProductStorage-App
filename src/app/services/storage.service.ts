import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Product } from '../Models/models';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  products!:Product[];

  public get getProducts(){
    return this.products;
  }

  public set setProducts(_products: Product[]){
    this.products=_products;
  }

  getAllProducts(){
    return this.http.get<Product[]>(environment.storageApi.url+'Products/get-all-products');
  }

  updateProduct(id:number, producto:Product){
    return this.http.put<Product>(environment.storageApi.url+'Products/update-product/'+id,producto);
  }

  createProduct(producto:Product){
    return this.http.put<Product>(environment.storageApi.url+'Products/create-product/',producto);
  }

  getProduct(id:number){
    return this.http.get<Product>(environment.storageApi.url+'Products/get-product-by-id/'+id);
  }


  constructor(private http: HttpClient) { }
}

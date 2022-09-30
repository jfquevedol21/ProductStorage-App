import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/models';
import { StorageService } from 'src/app/services/storage.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  getProductos(){
    return this.storageService.getProducts;
  }

  marcar(defecto:boolean, id:number){
    console.log(id);
    this.storageService.getProduct(id).subscribe((_response:Product) => {
      let producto:Product=_response;
      producto.isFaulty=defecto;

      this.storageService.updateProduct(id, producto).subscribe(x=>{
        this.storageService.getAllProducts().subscribe((productos:Product[])=>{
          this.storageService.setProducts=productos;
          console.log(productos);
        }
          
        )
      });
      

    });
  }

 
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.storageService.getAllProducts().subscribe((productos:Product[])=>{
      this.storageService.setProducts=productos;
      console.log(this.storageService.getProducts);
    })
  }

}

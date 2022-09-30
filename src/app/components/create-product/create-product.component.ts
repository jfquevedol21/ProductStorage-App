import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/models';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  quantity!: number;
  isFaulty!: boolean;
  active!: boolean;
  name!: string;

  producto:Product={
    id:0,
    quantity:0,
    isFaulty:false,
    active:false,
    name:''
  }


  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }


  
}

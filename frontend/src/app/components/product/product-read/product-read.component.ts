import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  displayedColumns = ['id','name','price', 'action']

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.read().subscribe(products => {
      this.products = products
      console.log(products)
    })

  }
}

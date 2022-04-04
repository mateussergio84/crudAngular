import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product!: Product;

  constructor(
    private productservice: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') 
    if (id != null){
      this.productservice.readById(id).subscribe(product  => {
        this.product = product
      })
    }
  }


  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id!= null) {
      this.productservice.delete(id).subscribe(() =>{
        this.productservice.showMessage('Produtudo Excluido!');
        this.router.navigate(['/product'])
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/product'])
  }
}

import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product

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

  updateProduct(): void{
   this.productservice.update(this.product).subscribe(() =>{
     this.productservice.showMessage('Produtudo Atualizado!');
     this.router.navigate(["/product"]);
   })
  }

  cancel(): void {
    this.router.navigate(['/product'])
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../products.service';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
   id:any;
   productData:any ;
  constructor(
    private toaster :NotificationService ,
    public ProductsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.ProductsService.getProductDetails(this.id).subscribe((result)=>{
    this.productData = result ;
    console.log(this.productData ,"Product");
   })
  }
  addToCart(item:any){
     this.ProductsService.cartProducts.push(item)
     this.toaster.showSuccess("تم أضافة المنتج الي سلة التسوق","")
     this.ProductsService.cartCount++ ;
    }
}

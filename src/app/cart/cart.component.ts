import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartDetails:any[]  =[]
  
  constructor(
    private toaster:NotificationService, 
    private ProductsService:ProductsService
    ){}

  ngOnInit(): void {
    this.cartDetails=this.ProductsService.cartProducts
    console.log(this.cartDetails ,"......");
    
  }

  deleteItem(item:any){
    this.ProductsService.cartProducts.splice(item ,1) ;
    this.toaster.showWarning("تم حذف المنتج من السلة" , "")
    this.ProductsService.cartCount-- ;

  }
  

}

import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
import { NotificationService } from './../notification.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  allProducts: any[] = [];
  categories: any[] = [];

  constructor(
    public ProductsService: ProductsService,
    private toaster: NotificationService
  ) { }

  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((result) => {
      this.allProducts = result;
    })

    this.ProductsService.getCategories().subscribe((result) => {
      this.categories = result;
    })
  }
  addToCart(item: any) {
    this.ProductsService.cartProducts.push(item)
    this.toaster.showSuccess("تم أضافة المنتج الي سلة التسوق", "")
    this.ProductsService.cartCount++ ;
  }

}

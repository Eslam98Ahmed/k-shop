import { Component } from '@angular/core';
import { ProductsService } from './../products.service';
import { NotificationService } from './../notification.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productsLimit: any[] = [];
  constructor(
    public ProductsService: ProductsService,
    private toaster: NotificationService
  ) { }

  //---- owl carousal option ----//
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  slides = [
    // {id: 4, img: "../../assets/brand4.png"},
    { id: 3, img: "../../assets/brand3.png" },
    { id: 1, img: "../../assets/brand1.png" },
    { id: 5, img: "../../assets/brand5.png" },
    // {id: 2, img: "../../assets/brand2.png"},
    // {id: 6, img: "../../assets/brand6.png"},
  ];
  //---- end owl carousal option ----//

  ngOnInit(): void {
    this.ProductsService.getLimitProducts().subscribe((result: any) => {
      this.productsLimit = result;
    })
  }

  addToCart(item: any) {
    this.ProductsService.cartProducts.push(item)
    this.toaster.showSuccess("تم أضافة المنتج الي سلة التسوق", "")
    this.ProductsService.cartCount++;
  }

}

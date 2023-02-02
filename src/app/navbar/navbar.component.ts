import { Component } from '@angular/core';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  categories:any[] =[];

  constructor(public ProductsService:ProductsService){}
  
  ngOnInit(): void {
   this.ProductsService.getCategories().subscribe((res)=>{
    this.categories =res ;
   })
  }

}

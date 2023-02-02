import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartProducts:any[] = [] 
  cartCount:number = 0 ;

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products`)
  }

  getLimitProducts():Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products?limit=4`)
  }

  getCategories():Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/categories`)
  }

  getProductDetails(id:any):Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`)
  }
}

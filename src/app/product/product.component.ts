import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.http.get(environment.baseUrl + "/getProduct").subscribe((res:any)=> {
      console.log(res);
      this.products = res.data;
    })
  }

}

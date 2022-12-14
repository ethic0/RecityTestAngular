import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  // @Output() product = new EventEmitter();
  selectedProduct:object[] = [];
  productList = [
    {"name":"Harry Potter","cost":12.49,"category":"book","imported":false,"taxExempt":true,"importExempt":true},
    {"name":"Avengers EndGame","cost":14.99,"category":"entertainment","imported":false,"taxExempt":false,"importExempt":true},
    {"name":"Dairy Milk","cost":0.85,"category":"food","imported":false,"taxExempt":true,"importExempt":true},
    {"name":"Chocolate Box","cost":10.00,"category":"food","imported":true,"taxExempt":true,"importExempt":false},
    {"name":"Perfume","cost":47.50,"category":"cosmetic","imported":true,"taxExempt":false,"importExempt":false},
    {"name":"Perfume 2","cost":27.99,"category":"cosmetic","imported":true,"taxExempt":false,"importExempt":false},
    {"name":"Perfume 3","cost":18.99,"category":"cosmetic","imported":false,"taxExempt":false,"importExempt":true},
    {"name":"Headache Pills","cost":9.75,"category":"medicine","imported":false,"taxExempt":true,"importExempt":true},
    {"name":"Chocolate box 2","cost":11.25,"category":"food","imported":true,"taxExempt":false,"importExempt":false},
  ]
  constructor() { }

  ngOnInit(): void {
  }
  addItem(product: any){
    console.log('Product added:', product);
    // this.selectedProduct.forEach((item:any)=>{
    //   if(item.taxExempt == false){
    //     item.cost = item.cost + ((10/100)* item.cost)
    //   }
    //   if(item.importExempt == false){
    //     item.cost = item.cost + ((5/10)*item.cost);
    //   }
    // })
    this.selectedProduct.push(product);
    // this.product.emit(this.selectedProduct);
  }

}

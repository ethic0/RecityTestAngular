import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() products: any[];
  purchase:boolean = false;
  items:any = [];
  constructor() {
   }

  ngOnInit(): void {
  }
  removeItem(product: any){
    console.log(product);
    // this.productsRemoved.emit(product);
    this.products.splice(product,1);
  }
  checkout(){
    this.purchase = true;
    // this.items.push(...this.products);
    this.items = [];
    this.items.push.apply(this.items, this.products)
    this.items.forEach((item:any)=>{
      if(item.taxExempt == false){
        item.cost +=((10/100)*item.cost);
      }
      if(item.importExempt == false){
        item.cost +=((5/100)*item.cost)
      }
      // this.items.push(item);
    });

  }

}

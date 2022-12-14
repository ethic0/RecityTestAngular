import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() products:any[];
  salesTax = 0;
  totalCost = 0;
  constructor() { }

  ngOnInit(): void {
   this.products.forEach((item)=>{
    this.totalCost += item.cost;
   }) 
  }
}

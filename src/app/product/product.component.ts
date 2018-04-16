import { Component, OnInit } from '@angular/core';
import { Productm } from './productm';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model: any = {};
  constructor() { }

  register() {
    alert(this.model.firstName);
  }

  ngOnInit() {


  }

}

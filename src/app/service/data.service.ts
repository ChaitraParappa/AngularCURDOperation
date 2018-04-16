import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Productm } from '../product/productm'
@Injectable()
export class DataService {
  private productSource = new BehaviorSubject<Productm>(null);
  currentProduct = this.productSource.asObservable();
  constructor() { }
  changeProduct(product: Productm) {
    this.productSource.next(product);
  }
}

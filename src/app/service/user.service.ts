import { Injectable } from '@angular/core';
import { Productm } from '../../app/product/productm';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {
  readonly rootUrl = "http://localhost:61912";
  productList: Productm[];

  constructor(private http: HttpClient) {
  }
  getuser(): Observable<Productm[]>{
    return this.http.get<Productm[]>("http://localhost:57126/api/Account/GetDetails");
  }
  
  registerUser(user: Productm) {
   this.http.post("http://localhost:57126/api/Account/Register", user)
     .subscribe(res =>
       console.log('Done'));
  }


  updateProduct(product: Productm) {
    this.http.put('http://localhost:57126/api/Account/PutDetails', product).subscribe();
  }

  deleteProduct(id) {
    return this.http.delete('http://localhost:57126/api/Account/DeleteProduct/' + id).subscribe();
  }
}




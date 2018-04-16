import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Productm } from '../../app/product/productm';
import {DataService } from '../service/data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  products: Productm[];
  constructor(private http: HttpClient, private userService: UserService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getCoins();
  }
  deleteProduct(id) {
    this.userService.deleteProduct(id);
    this.router.navigateByUrl("/login");

  }

  getCoins() {
    this.userService.getuser().subscribe(res => {
      this.products = res;
    });
  }
  Navigate(product: Productm) {
    this.dataService.changeProduct(product);
    this.router.navigateByUrl("/edit");
  }

}

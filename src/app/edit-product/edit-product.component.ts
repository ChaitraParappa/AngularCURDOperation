import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Productm } from '../product/productm';
import { DataService } from '../service/data.service'
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  coin: Productm;
  angForm: FormGroup;
  title = 'Edit Coin';
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService, private fb: FormBuilder, private dataService: DataService) {
    this.dataService.currentProduct.subscribe(prod => this.coin = prod);
  }

  updateProduct() {
      this.service.updateProduct(this.coin);
      this.router.navigate(['home']);
  }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { Productm } from '../product/productm';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new Productm();
  //model: any = {};
  constructor(private userService: UserService, private router: Router) { }

  register() {
    alert(JSON.stringify(this.model));
    this.userService.registerUser(this.model);
    this.router.navigate(['login']);
      
  }

  ngOnInit() {
  }

}

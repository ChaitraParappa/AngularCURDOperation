import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService } from '../app/service/user.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DataService } from './service/data.service'


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    EditProductComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing

  ],
  providers: [
    UserService,
    FormBuilder,
    DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';

//imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//declerations
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BindingSampleComponent } from './binding-sample/binding-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    FormsDemoComponent,
    HttpDemoComponent,
    SignalsDemoComponent,
    UserItemComponent,
    ContactUsComponent,
    BindingSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

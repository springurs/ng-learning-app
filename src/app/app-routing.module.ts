import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'forms', component: FormsDemoComponent },
  { path: 'http', component: HttpDemoComponent },
  { path: 'signals', component: SignalsDemoComponent },
  { path: 'contactus', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

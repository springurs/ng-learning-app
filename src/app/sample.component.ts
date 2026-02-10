import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-sample',
  template: `
    <h2>Sample Component with Service Injection</h2>
    <p>Number of products: {{ products.length }}</p>
    <p>Number of users: {{ users.length }}</p>
  `
})

export interface Products {
    name: string;
    id: number
}
export class SampleComponent {
  private products: Products [] = [];

  dataService = inject(DataService);
  

}

import { Component } from '@angular/core';

interface ProductForm {
  name: string;
  price: number;
  inStock: boolean;
}

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent {
  productModel: ProductForm = { name: '', price: 0, inStock: false };
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.productModel);
      this.submitted = true;
    }
  }

  resetForm() {
    this.productModel = { name: '', price: 0, inStock: false };
    this.submitted = false;
  }
}

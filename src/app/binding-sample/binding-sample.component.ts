import { Component, Input, Output, EventEmitter, inject } from "@angular/core";
import { DataService } from "../data.service";

interface Products {
    name: string;
    price: number;
}

@Component({
    selector: 'app-binding-sample',
    templateUrl: './binding-sample.component.html',
    styleUrls: ['./binding-sample.component.css']
})

export class BindingSampleComponent {
    @Input() totalRecords = 0;
    @Input() currentPage = 1;
    @Output() pageChange = new EventEmitter<number>();
    
    dataService = inject(DataService);
    products = this.dataService.getProducts().splice(this.currentPage, 2);;

    /*products: Products[] = [
        { name: 'Apple', price: 10.99 },
        { name: 'Cat', price: 20.99 },
        { name: 'Bat', price: 30.99 },
        { name: 'Boy', price: 30.99 },
        { name: 'Can', price: 30.99 },
        { name: 'Ant', price: 30.99 },
        { name: 'Tooth', price: 30.99 },
        { name: 'Pick', price: 30.99 },
    ]*/
    
    handlePrevClick() {
        this.currentPage = this.currentPage - 1;
        this.products = this.products.splice(this.currentPage, 2);
        this.pageChange.emit(this.currentPage);
    }

    handleNextClick() {
        this.currentPage = this.currentPage + 1;
        this.products = this.products.splice(this.currentPage, 2);
        this.pageChange.emit(this.currentPage);
    }
}

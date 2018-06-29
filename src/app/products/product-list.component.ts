import { Component } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.css']

})

export class ProductListComponent{

    constructor(private _productService: ProductService){}

    pageTitle: string='Product List';
    imageWith: number  = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    _listFilter: string;
    errorMessage:string;

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter? this.performFilter(this.listFilter): this.products;
    }

    performFilter(filter:string): IProduct[]{
     return this.products.filter(x => x.description.indexOf(filter)> -1);
    }

    eventMessage: string='';
    onNotify(message: string): void{
        this.eventMessage = message;
    }

    products: IProduct[] = [];
    filteredProducts : IProduct[];

    toggleImage(): void {
    this.showImage = !this.showImage;   
    }

    ngOnInit(): void{
        this._productService.getProducts()
        .subscribe( x => {
            this.products = x,
            this.filteredProducts = this.products
        },
        err => this.errorMessage= <any>err);
    
    }
}
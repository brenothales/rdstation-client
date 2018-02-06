import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Input() company_id: number;
  public product_new: Product = new Product({});

  constructor() { }

  ngOnInit() {
  }
}
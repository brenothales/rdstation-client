import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product.model';
import { MzToastService} from 'ng2-materialize';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() product: Product;
  @Input() products: Product[];
  @Input() company_id: number;

  constructor(
    private productService: ProductService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (this.product.id) {
      this.productService.updateProduct(this.product.id, this.product).subscribe(data => {
        this.toastService.show('Product updated', 8000, 'green');
      }, error => {
        this.toastService.show('Problem in Product update', 8000, 'red');
      });
    } else {
      this.productService.createProduct(this.company_id, this.product).subscribe(data => {
        this.products.push(new Product(data));
        this.product = new Product({});
      }, error => {
        this.toastService.show('Problem in Product creation', 8000, 'red');
      });
    }
  }

  deleteProduct(): boolean {
    if (confirm('Your want delete this product?')) {
      this.productService.destroyProduct(this.product.id).subscribe(data => {
        const index = this.products.indexOf (this.product);
        this.products.splice(index, 1);
        this.toastService.show('product deleted', 8000, 'green');
      }, error => {
        this.toastService.show('Error in delete product ' + this.product.name, 8000, 'red');
      });
    }
    return false;
  }
}

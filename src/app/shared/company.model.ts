import { Product } from './product.model';

export class Company {
    id: number;
    name: string;
    cnpj: string;
    country: string;
    currency: string;
    products: Product[] = [];
    user_id: number;
    slug: string;

    constructor(CompanyInfo: any) {
        this.id = CompanyInfo.id;
        this.name = CompanyInfo.name;
        this.cnpj = CompanyInfo.cnpj;
        this.country = CompanyInfo.country;
        this.currency = CompanyInfo.currency;
        this.user_id = CompanyInfo.user_id;
        this.slug = CompanyInfo.slug;

        this.includeProducts(CompanyInfo.products);
    }

    private includeProducts(products: any) {
        for (const count in products) {
            this.products.push( new Product(products[count]) );
        }
    }
}
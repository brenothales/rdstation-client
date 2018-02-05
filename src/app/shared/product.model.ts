


export class Product {
    id: number;
    price: number;
    company_id: number;


    constructor(questionInfo: any) {
        this.id = questionInfo.id;
        this.price = questionInfo.price;
        this.company_id = questionInfo.company_id;
    }

}
export class Subscriber {
    id: number;
    manager_id: number;
    payer_id: number;
    product_id: number;




    constructor(subscribertInfo: any) {
        this.id = subscribertInfo.id;
        this.manager_id = subscribertInfo.manager_id;
        this.payer_id = subscribertInfo.payer_id;
        this.product_id = subscribertInfo.product_id;
    }

}
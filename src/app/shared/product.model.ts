import { Subscriber } from './subscriber.model';
export class Product {
    id: number;
    name: string;
    price: number;
    company_id: number;
    subscribers: Subscriber[] = [];


    constructor(productInfo: any) {
        this.id = productInfo.id;
        this.name = productInfo.name;
        this.price = productInfo.price;
        this.company_id = productInfo.company_id;

        this.includeSubscribers(productInfo.subscriber);
    }

    private includeSubscribers(subscribers: any) {
        for (const count in subscribers) {
            this.subscribers.push( new Subscriber(subscribers[count]) );
        }
    }
}
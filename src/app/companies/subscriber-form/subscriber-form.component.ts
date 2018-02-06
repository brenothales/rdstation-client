import { Component, OnInit, Input } from '@angular/core';
import { SubscriberService } from '../../shared/subscriber.service';
import { Subscriber } from '../../shared/subscriber.model';
import { MzToastService} from 'ng2-materialize';


@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.css']
})
export class SubscriberFormComponent implements OnInit {

  @Input() subscriber: Subscriber;
  @Input() subscribers: Subscriber[];
  @Input() product_id: number;

  constructor(
    private subscriberService: SubscriberService,
    private toastService: MzToastService
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    if (this.subscriber.id) {
      this.subscriberService.updateSubscriber(this.subscriber.id, this.subscriber).subscribe(data => {
        this.toastService.show('Subscriber updated', 8000, 'green');
      }, error => {
        this.toastService.show('Problem in Subscriber update', 8000, 'red');
      });
    } else {
      this.subscriberService.createSubscriber(this.product_id, this.subscriber).subscribe(data => {
        this.subscribers.push(new Subscriber(data));
        this.subscriber = new Subscriber({});
      }, error => {
        this.toastService.show('Problem in Subscriber creation', 8000, 'red');
      });
    }
  }

  deleteSubscriber(): boolean {
    if (confirm('Your want delete this subscriber?')) {
      this.subscriberService.destroySubscriber(this.subscriber.id).subscribe(data => {
        const index = this.subscribers.indexOf (this.subscriber);
        this.subscribers.splice(index, 1);
        this.toastService.show('subscriber deleted', 8000, 'green');
      }, error => {
        this.toastService.show('Error in delete subscriber ' + this.subscriber.id, 8000, 'red');
      });
    }
    return false;
  }
}

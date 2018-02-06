import { Component, OnInit, Input } from '@angular/core';
import { SubscriberService } from '../../shared/subscriber.service';
import { Subscriber } from '../../shared/subscriber.model';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.css']
})
export class SubscriberListComponent implements OnInit {

  @Input() subscribers: Subscriber[];
  @Input() product_id: number;
  public subscriber_new: Subscriber = new Subscriber({});

  constructor() { }

  ngOnInit() {
  }
}
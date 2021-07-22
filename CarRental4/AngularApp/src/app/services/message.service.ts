import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class CarMessage {
  title: string;
  body: string;
  display: boolean;
  style: string;

  constructor(title, body, style?) {
    this.title = title
    this.body = body
    this.style = style || 'info'
    this.display = true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private messageDelivery = new BehaviorSubject<CarMessage>({ body: "", title: "", display: false, style: "" });
  message = this.messageDelivery.asObservable();

  changeMessage(message: CarMessage) {
    this.messageDelivery.next(message)
  }
}

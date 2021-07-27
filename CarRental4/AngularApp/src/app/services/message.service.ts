import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FAIconClasses } from '../FAIcons';

const messageIcons = {
  error: FAIconClasses.skull,
  warn: FAIconClasses.error,
  success: FAIconClasses.check,
  info: FAIconClasses.info
}

export class CarMessage {
  title: string;
  body: string;
  display: boolean;
  icon: string;
  tooltip: string;

  constructor(title, body, icon?, tooltip?) {
    this.title = title;
    this.body = body;
    // this.style = style || 'info'
    this.icon = messageIcons[icon] || "";
    this.tooltip = tooltip;
    this.display = true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private messageDelivery = new BehaviorSubject<CarMessage>({ body: "", title: "", display: false, icon: "", tooltip:"" });
  message = this.messageDelivery.asObservable();

  private changeMessage(message: CarMessage) {
    this.messageDelivery.next(message)
  }
  specificMessage(title, body, icon?, tooltip?) {
    var m: CarMessage = new CarMessage(title, body, icon, tooltip);
    this.changeMessage(m)
  }

  genericWarning(text: string) {
    this.specificMessage("Warning", text, 'warn')
  }
  genericSuccess(text: string) {
    this.specificMessage("Success", text, 'success')
  }
  genericError(text: string) {
    this.specificMessage("Error!", text, 'error')
  }
}

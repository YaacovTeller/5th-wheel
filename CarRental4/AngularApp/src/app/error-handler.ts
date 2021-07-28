import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService, CarMessage } from './services/message.service';

@Injectable({
  providedIn: 'root'
})
export class CarErrorHandler implements ErrorHandler {

  constructor(private messageService: MessageService) { }

  handleError(error: Error): void {
    console.error("HANDLED ERROR: " + error)
    //  setTimeout(() => {
    this.messageService.error(error)
  //  }, 1000)
  }
}

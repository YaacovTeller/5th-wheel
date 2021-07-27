import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService, CarMessage } from './services/message.service';

@Injectable({
  providedIn: 'root'
})
export class CarErrorHandler implements ErrorHandler {

  constructor(private messageService: MessageService) { }

  handleError(error: any): void {
    console.error("HANDLED ERROR: " + error)
  //  setTimeout(() => {
    this.messageService.specificMessage("An error has occurred!", error.name, 'error', error.message);
  //  }, 1000)
  }
}

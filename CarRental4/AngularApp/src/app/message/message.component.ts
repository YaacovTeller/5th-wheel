import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

  display = true;
  title: string = "Title";
  body: string = "message text body";

  constructor(private srvc: MessageService) {}

  ngOnInit() {
    this.srvc.message.subscribe(
      m => { this.display = m.display, this.title = m.title, this.body = m.body, this.remove(this) })
  }

  remove(_this) {
    setTimeout(function () {
      $(".messageFrame").fadeOut();
     // _this.display = false
    }, 4000)
    setTimeout(function () {
      $(".messageFrame").fadeIn();
       _this.display = false
    }, 5000)
  }

  hide() {
    $(".messageFrame").hide();
  }
}

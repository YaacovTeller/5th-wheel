import { Component, OnInit } from '@angular/core';
import { CarMessage, MessageService } from './services/message.service';

@Component({
  selector: 'Page-not-found',
  template: `<div class="cardContainer"><mat-card class="card">
  <mat-card-header>
    <mat-card-title>
      Error
    </mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <h1>404 - Page Not Found</h1>
<h3>5th Wheel contains some useful pages, and this is not one of them</h3><br>
  </mat-card-content>

</mat-card>
</div>
<i class="fas fa-car-side fa-3x anim1"></i><i class="fas fa-car-side fa-3x anim2"></i><i class="fas fa-truck-monster fa-3x anim3"></i>`
  ,
  styleUrls: ['./app.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private messageService: MessageService) {}
  ngOnInit() {
    var m: CarMessage = new CarMessage("Oops!", `check that Url`);
    this.messageService.changeMessage(m)
  }
}

//<i class="fa fa-check fa-3x" > </i><i class="fa fa-subway fa-3x"></i > <i class="fa fa-space-shuttle fa-3x" > </i>
//  < i class="fa fa-syringe fa-3x" > </i><i class="fa fa-sliders-h fa-3x"></i > <i class="fab fa-steam fa-3x" > </i>
//    < i class="fab fa-studiovinari fa-3x" > </i><i class="fa fa-address-card fa-3x inline"></i > <i class="fab fa-gitkraken fa-3x" > </i>
//      < i class="fa fa-key fa-3x" > </i><i class="fas fa-skull fa-3x"></i > <i class="fab fa-old-republic fa-3x" > </i>
//        < i class="fas fa-synagogue fa-3x" > </i><i class="fas fa-star-of-david fa-3x"></i >
//          <i class="fas fa-skull-crossbones fa-3x" > </i>
//            < i class="fas fa-snowboarding fa-3x" > </i><i class="fas fa-snowman fa-3x"></i > <i class="fab fa-suse fa-3x" > </i>
//              < i class="fas fa-radiation fa-3x" > </i><i class="fas fa-dungeon fa-3x"></i >
//<i class="fas fa-skull fa-3x"></i><i class="fas fa-skull fa-3x"></i><i class="fas fa-skull fa-3x"></i>

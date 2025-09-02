import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  // providers:[SubscribeService]
})
export class HeroComponent {

  constructor(private subService :SubscribeService){}

  OnSubscribe(){
    // // tight-coupling
    // let subService = new SubscribeService();
    // subService.OnSubscribeClicked("yearly");

    this.subService.OnSubscribeClicked("yearly");
  }
}

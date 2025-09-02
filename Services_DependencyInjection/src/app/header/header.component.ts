import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // providers:[SubscribeService]
})
export class HeaderComponent {
  selectedTab:string='home';

  constructor(private subService:SubscribeService){}

  HomeClicked(event:Event){
    event.preventDefault();
    this.selectedTab = 'home';
  }

  AdminClicked(event:Event){
    event.preventDefault();
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
  // tightly-coupled - if anything chnages in subscribe service class it will also affect header class
  //  let subService = new SubscribeService();//creating an instance of SubscribeService class
  //  subService.OnSubscribeClicked("Monthly");
  this.subService.OnSubscribeClicked("Monthly");
  }
}

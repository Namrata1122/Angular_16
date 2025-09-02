import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  //providers:[SubscribeService]//2.What to provide //instance of SubscribeService class injected
})
export class SidebarComponent {

  // Using Dependency Injection
  // 1. how to provide dependency
  // a private property called subService is given an instance of SubscribeService class
  constructor(private subService: SubscribeService){}

  OnSubscribe(){
    // // tight-coupling
    // let subService = new SubscribeService();
    // subService.OnSubscribeClicked("monthly");

    this.subService.OnSubscribeClicked("monthly");
  }
}

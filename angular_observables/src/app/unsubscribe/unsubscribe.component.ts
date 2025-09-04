import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent {
  //interval function creates an observable that emits sequential numbers after a specified time interval
  counter = interval(1000);

  data1 :number[]=[];
  data2:number[]=[];
  data3:number[]=[];
  subscriber1;
  subscriber2;
  subscriber3;


  OnSubscribe1(){
    // subscribe method returns an observable
    this.subscriber1 = this.counter.subscribe((val)=>{
      this.data1.push(val);
    })
  }

  OnSubscribe2(){
    this.subscriber2 = this.counter.subscribe((val)=>{
      this.data2.push(val);
    })
  }
  OnSubscribe3(){
    this.subscriber3 = this.counter.subscribe((val)=>{
      this.data3.push(val);
    })
  }


  OnUnSubscribe1(){
    this.subscriber1.unsubscribe();
  }

  OnUnSubscribe2(){
    this.subscriber2.unsubscribe();
  }

  OnUnSubscribe3(){
    this.subscriber3.unsubscribe();
  }
}

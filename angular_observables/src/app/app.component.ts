import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_observables';

  data: any[]=[];

  //1.create an observable
  
  //observable-event emitter
  myObservable = new Observable((observer)=>{
    setTimeout(()=>observer.next(1),1000);
    setTimeout(()=>observer.next(2),2000);
    setTimeout(()=>observer.next(3),3000);
    // Emitting an error
    setTimeout(()=>observer.error(new Error('Something went wrong. please try again later!')),3000);
    // data after emitting error is not emitted
    setTimeout(()=>observer.next(4),4000);
    setTimeout(()=>observer.next(5),5000);
    // after complete signal is sent no more data can be emitted
    setTimeout(()=>observer.complete(),3000);
  });

  
  GetAsyncData(){

    //Observer-event listener
    //subscribe method takes three optional callback functions
    // - next,error,complete
    this.myObservable.subscribe((val:any)=>{
      this.data.push(val);
    },
    // handling error event
    (err)=>{
      alert(err.message);
    },
    ()=>{
      alert('All data is streamed');
    }
  );
  }
}

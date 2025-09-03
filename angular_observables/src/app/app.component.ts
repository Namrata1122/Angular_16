import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_observables';

  data: any[]=[];

  array1 = [1,3,5,7,9];
  array2 = ['A','B','C','D'];

  //1.create an observable
  
  // //observable-event emitter
  // myObservable = new Observable((observer)=>{
  //   setTimeout(()=>observer.next(1),1000);
  //   setTimeout(()=>observer.next(2),2000);
  //   setTimeout(()=>observer.next(3),3000);
  //   // Emitting an error
  //   setTimeout(()=>observer.error(new Error('Something went wrong. please try again later!')),3000);
  //   // data after emitting error is not emitted
  //   setTimeout(()=>observer.next(4),4000);
  //   setTimeout(()=>observer.next(5),5000);
  //   // after complete signal is sent no more data can be emitted
  //   setTimeout(()=>observer.complete(),3000);
  // });

  // myObservable = of(this.array1, this.array2,20,30,'Hello',true);
  
  promiseData = new Promise((resolve,reject)=>{
    resolve([10,20,30,40,50]);
  })

  // from operator streams each element of array1 one after another
  myObservable = from(this.promiseData);


  GetAsyncData(){

    //Observer-event listener
    //subscribe method takes three optional callback functions
    // - next,error,complete
  //   this.myObservable.subscribe((val:any)=>{
  //     this.data.push(val);
  //   },
  //   // handling error event
  //   (err)=>{
  //     alert(err.message);
  //   },
  //   ()=>{
  //     alert('All data is streamed');
  //   }
  // );

  this.myObservable.subscribe({
    next:(val:any)=>
      {this.data.push(val);
        console.log(this.data);
      }
    ,
    error(err){
      alert(err.message)
    },
    complete(){
      alert('All the data  is streamed!')
    }
  })
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subject,BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit{
  ngOnInit(){
    // let obs = new Observable((observer)=>{observer.next(Math.random())})

    // //subscriber 1
    // obs.subscribe((data)=>{console.log(data)});

    // //subscriber 2
    // obs.subscribe((data)=>{console.log(data)});

    // const subject = new Subject();

    // //subscriber 1
    // subject.subscribe((data)=>{console.log(data)});

    // //subscriber 2
    // subject.subscribe((data)=>{console.log(data)});

    // subject.next(Math.random());

    // suject acting as data consumer
    // const subject = new Subject();

    // const data = ajax('https://randomuser.me/api/');

    // subject.subscribe((res)=>console.log(res));
    // subject.subscribe((res)=>console.log(res));
    // subject.subscribe((res)=>console.log(res));
    
    // data.subscribe(subject);

    // // Behavior subject
    // const subject = new BehaviorSubject<number>(100);

    // //subscriber 1
    // subject.subscribe((data)=>{console.log("Subscriber: 1 "+data)});

    // //subscriber 2
    // subject.subscribe((data)=>{console.log("Subscriber: 2 "+data)});

    // subject.next(2020);

    // subject.subscribe((data)=>{console.log("Subscriber: 3 "+data)})
    // subject.next(2030)

    // Replay subject
    // // const subject = new Subject();
    // const subject = new ReplaySubject(2,1000);
    // subject.next(100);
    // subject.next(200);
    // subject.next(300);

    // //subscriber 1
    // subject.subscribe((data)=>{console.log("Subscriber: 1 "+data)});

    // //subscriber 2
    // subject.subscribe((data)=>{console.log("Subscriber: 2 "+data)});

    // subject.next(2020);

    // subject.subscribe((data)=>{console.log("Subscriber: 3 "+data)})
    // subject.next(2030)

    // Async Subject
    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);

    // asyncSubject.subscribe((data)=>{
    //   console.log(`Subscriber 1 : ${data}`)});

    // asyncSubject.complete();
    // asyncSubject.next(400);
    // asyncSubject.complete();

    // asyncSubject.subscribe((data)=>{
    //   console.log(`Subscriber 2 : ${data}`)});

    const promise = new Promise((resolve,reject)=>{
      console.log('Carcel Escalante.');
      resolve(100);
      resolve(200);
      resolve(300);
    })

    promise.then((data)=>{
      console.log(data);
    })

    const obs = new Observable((sub)=>{
      console.log('Ines Valeztena');
      sub.next(100);
      sub.next(200);
      sub.next(300);
    });

    obs.subscribe(data =>console.log("observable"+data));

  }
}

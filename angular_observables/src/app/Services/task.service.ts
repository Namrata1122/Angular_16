import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TaskService{
    //creating an event
    // createTask:EventEmitter<string> = new EventEmitter<string>();

    // using subject
    createTask = new Subject<string>();

    // raising an event when something happens
    OnCreateTask(value:string){
        this.createTask.next(value);
    }
}
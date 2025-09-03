import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TaskService{
    //creating an event
    createTask:EventEmitter<string> = new EventEmitter<string>();

    // raising an event when something happens
    OnCreateTask(value:string){
        this.createTask.emit(value);
    }
}
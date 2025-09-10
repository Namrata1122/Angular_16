import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Model/task";
import { catchError, map, Subject, tap, throwError } from "rxjs";
import { LoggingService } from "./Logging.service";

@Injectable({
    providedIn: 'root'
})
export class TaskService{
    http:HttpClient= inject(HttpClient);
    loggingService: LoggingService = inject(LoggingService);
    errorSubject = new Subject<HttpErrorResponse>();

    CreateTask(task:Task){
        const headers = new HttpHeaders({'my-header':'hello-world'})
            this.http.post<{name:string}>
            ('https://angularhttpclient-22d60-default-rtdb.firebaseio.com/tasks.json',
              task,{headers:headers})
              .pipe(catchError((err)=>{
                //log errors in database
                const errObj = {statusCode:err.status,errorMessage:err.message, dateTime: new Date()}
                this.loggingService.logError(errObj);
    
                return throwError(()=>err);
              }))
            .subscribe({error:(err)=>{
              this.errorSubject.next(err);
            }});
    }

    DeleteTask(id:string | undefined){
        this.http.delete('https://angularhttpclient-22d60-default-rtdb.firebaseio.com/tasks/'+id+'.json')
        .pipe(catchError((err)=>{
          //log errors in database
          const errObj = {statusCode:err.status,errorMessage:err.message, dateTime: new Date()}
          this.loggingService.logError(errObj);

          return throwError(()=>err);
        }))
    .subscribe({error:(err)=>{
      this.errorSubject.next(err);
    }});
    }

    DeleteAllTasks(){
        this.http.delete('https://angularhttpclient-22d60-default-rtdb.firebaseio.com/tasks.json'
          ,{observe:'events', responseType:'json'}
        )
        .pipe(tap((event)=>{
          console.log(event);
          if(event.type === HttpEventType.Sent){

          }
        }),catchError((err)=>{
          //log errors in database
          const errObj = {statusCode:err.status,errorMessage:err.message, dateTime: new Date()}
          this.loggingService.logError(errObj);

          return throwError(()=>err);
        }))
        .subscribe({error:(err)=>{
      this.errorSubject.next(err);
    }});
    }

    GetAllTasks(){
      // instance of http headers is immutable
      let headers = new HttpHeaders();
      // new instances is assigned to headers and old values are replaced with new values
      // headers = headers.set('content-type','application/json');
      // headers = headers.set('Access-Control-Allow-Origin','*');
      // with append new values are just appended to existing values
      headers = headers.append('content-type','application/json');
      headers = headers.append('Access-Control-Allow-Origin','*');

      // HttpParams is immutable
      let queryParams = new HttpParams();
      queryParams=queryParams.set('page',2);
      queryParams=queryParams.set('item',10);


        return this.http.get<{[key:string]:Task}>(
            'https://angularhttpclient-22d60-default-rtdb.firebaseio.com/tasks.json'
            ,{headers: headers, params: queryParams, observe:'body' }
          ).pipe(map((response)=>{
            // TRANSFORM DATA
            let tasks = [];
            console.log(response);
      
            for(let key in response){
              if(response.hasOwnProperty(key)){
                tasks.push({...response[key] , id:key});
              }
            }
      
            return tasks;
          }),catchError((err)=>{
            //log errors in database
            const errObj = {statusCode:err.status,errorMessage:err.message, dateTime: new Date()}
            this.loggingService.logError(errObj);

            return throwError(()=>err);
          }))
    }

    UpdateTask(id:string |undefined,data:Task){
      this.http.put(
        'https://angularhttpclient-22d60-default-rtdb.firebaseio.com/tasks/'+id+'.json'
        ,data)
        .pipe(catchError((err)=>{
          //log errors in database
          const errObj = {statusCode:err.status,errorMessage:err.message, dateTime: new Date()}
          this.loggingService.logError(errObj);

          return throwError(()=>err);
        }))
        .subscribe();
    }

    getTaskDetails(id:string|undefined){
      return this.http.get('https://angularhttpclient-22d60-default-rtdb.firebaseio.com/tasks/'+id+'.json')
      .pipe(map((response)=>{
        console.log(response);
        let task = {};
        task = {...response, id:id}
        return task;
      }))
    }
}
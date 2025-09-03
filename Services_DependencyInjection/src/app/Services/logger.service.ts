import { Injectable } from "@angular/core";

@Injectable({
    // we want to provide this service from app module
    providedIn:'root' // now no need to wrte it in the app.module.ts providers array
})
export class LoggerService{
    LogMessage(name:string,status:string){
        console.log(`A new user with name ${name} with status ${status} is added to user list.`)
    }
}
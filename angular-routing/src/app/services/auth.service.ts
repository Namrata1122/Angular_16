import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    isLogged:Boolean  = false;
    userService:UserService = inject(UserService);

    login(username:string,password:string){
        const users = this.userService.users;
        console.log(this.userService.users);
        console.log(username,password);
        let user = users.find((u)=>u.username.trim().toLowerCase() === username.trim().toLowerCase()
            && u.password.trim() === password.trim());
            console.log(user);
        if(user === undefined){
            this.isLogged = false;
        }else{
            this.isLogged = true;
        }
        
        return user;
    }

    logout(){
        this.isLogged = false;
    }

    IsAuthenticated(){
        return this.isLogged;
    }
}
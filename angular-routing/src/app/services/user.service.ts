import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
    providedIn:'root'
})
export class UserService{
    users:User[] =[
        new User(1,'John Smith','js','12345'),
        new User(2,'Merry Jane','MJ','12345'),
        new User(3,'Mark Vought','MV','12345'),
        new User(4,'Sarah King','sk','12345')
    ]
}
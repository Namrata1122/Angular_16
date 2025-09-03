import { Component, Inject } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // providers:[UserService]
})
export class UserListComponent {

  constructor(@Inject(USER_TOKEN) private userService:UserService){}

  userList = this.userService.GetAllUsers();

  ShowUserDetails(user:User){
    this.userService.OnShowUserDetails(user);
  }
}

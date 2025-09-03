import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // providers:[UserService]
})
export class UserListComponent {

  constructor(private userService:UserService){}

  userList = this.userService.GetAllUsers();
}

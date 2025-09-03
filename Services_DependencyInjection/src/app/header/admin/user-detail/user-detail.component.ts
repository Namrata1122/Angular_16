import { Component, inject, OnInit } from '@angular/core';
import { USER_TOKEN } from 'src/app/app.module';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  selectedUser:User | undefined;

  userService= inject(USER_TOKEN);

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data:User)=>{
      this.selectedUser = data;
      console.log(this.selectedUser);
    });
  }
}

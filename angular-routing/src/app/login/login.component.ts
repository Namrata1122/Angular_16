import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authService :AuthService = inject(AuthService);
  router:Router = inject(Router);
  activeRoute:ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries)=>{
      const logout = Boolean(queries.get('logout'));
      if(logout){
        this.authService.logout();
        alert('You are now logged out. IsLogged = '+this.authService.isLogged);
      }
    })
  }

  OnLoginClicked(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username,password);

    if(user === undefined){
      alert('Login credentials incorrect');
    }
    else{
      alert('Welcome ' +user.name +' You are logged In !');
      this.router.navigate(['/courses'])
    }
  }
}

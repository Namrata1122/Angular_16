import { NgModule } from "@angular/core";


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PopularComponent } from './home/popular/popular.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AuthGaurdService } from "./services/authgaurd.service";
import { canActivate,canActivateChild, resolve } from "./auth.guards";


 //DEFINE ROUTES
 const routes:Routes = [
    {path:'',component:HomeComponent},
    // {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent, canDeactivate:[(comp:ContactComponent)=>{return comp.canExit();}]},
    // {path:'courses',component:CoursesComponent, resolve:{courses:AuthGaurdService}},
    {path:'courses',component:CoursesComponent, resolve:{courses:resolve}},
    // {path:'courses/course/:id',component:CourseDetailComponent},
    // {path:'courses',canActivateChild:[AuthGaurdService],children:[
    {path:'courses',canActivateChild:[canActivateChild],children:[
      {path:'course/:id',component:CourseDetailComponent},
      {path:'popular',component:PopularComponent},
      // {path:'checkout',component:CheckoutComponent,canActivate:[AuthGaurdService]}
      // {path:'checkout',component:CheckoutComponent,canActivate:[canActivate]}
      // passing static or dynamic data to routes
      // {path:'checkout',component:CheckoutComponent, data:{name:'Test Course', price:399}},
      {path:'checkout',component:CheckoutComponent, data:{name:'Test Course', price:399}},
    ]},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotFoundComponent},
  ]

@NgModule({
    imports:[
      // enableTracing logs  all the navigation events triggered when going from one route to another into the developer's console.
        RouterModule.forRoot(routes, {enableTracing:true})
    ],
    exports:[
        RouterModule
    ]
})
export class RoutingModule{
   
}
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

 //DEFINE ROUTES
 const routes:Routes = [
    {path:'',component:HomeComponent},
    // {path:'',redirectTo:'Home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'courses',component:CoursesComponent},
    // {path:'courses/course/:id',component:CourseDetailComponent},
    {path:'courses',children:[
      {path:'course/:id',component:CourseDetailComponent},
      {path:'popular',component:PopularComponent},
      {path:'checkout',component:CheckoutComponent,canActivate:[AuthGaurdService]}
    ]},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotFoundComponent},
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RoutingModule{
   
}
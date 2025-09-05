import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PopularComponent } from './home/popular/popular.component';
import { BannerComponent } from './home/banner/banner.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ServicesComponent } from './home/services/services.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseService } from './services/course.service';
import { RoutingModule } from './routing.module';

// //DEFINE ROUTES
// const routes:Routes = [
//   {path:'',component:HomeComponent},
//   // {path:'',redirectTo:'Home',pathMatch:'full'},
//   {path:'home',component:HomeComponent},
//   {path:'about',component:AboutComponent},
//   {path:'contact',component:ContactComponent},
//   {path:'courses',component:CoursesComponent},
//   // {path:'courses/course/:id',component:CourseDetailComponent},
//   {path:'courses',children:[
//     {path:'course/:id',component:CourseDetailComponent},
//     {path:'popular',component:PopularComponent}
//   ]},
//   {path:'**',component:NotFoundComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    CoursesComponent,
    NotFoundComponent,
    PopularComponent,
    BannerComponent,
    ContactUsComponent,
    ServicesComponent,
    TestimonyComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
    // RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

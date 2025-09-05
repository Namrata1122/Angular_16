import { Component, inject } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  // courseService = inject(CourseService);
  // popularCourses :Course[]=[];
  // // injecting an instance of Router class 
  router: Router = inject(Router);
  activeRoute:ActivatedRoute = inject(ActivatedRoute);

  // ngOnInit(){
  //   this.popularCourses = this.courseService.courses.filter(c => c.rating>=4.5);
  // }

  navigateToCourses(){
    // to append courses on /home path - /home/courses
    // this.router.navigate(['courses'],{relativeTo:this.activeRoute});
    this.router.navigateByUrl('courses');
  }
}

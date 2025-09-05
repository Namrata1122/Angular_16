import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courseService:CourseService = inject(CourseService);
  AllCourses : Course[] ;
  searchString: string;

  activeRoute:ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    // this.searchString = this.activeRoute.snapshot.queryParams['search'];
    // this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString);

    this.activeRoute.queryParamMap.subscribe((data)=>{
      this.searchString = data.get('search');

      if(this.searchString === undefined || this.searchString === '' || this.searchString === null){
        this.AllCourses = this.courseService.courses;
      }else{
        this.AllCourses = this.courseService.courses.filter(x=>x.title.toLowerCase().includes(this.searchString.toLowerCase()));
      }
    })
  }

}

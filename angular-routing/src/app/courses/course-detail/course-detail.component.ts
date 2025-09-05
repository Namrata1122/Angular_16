import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit,OnDestroy{
  selectedCourse:Course;
  courseId:number;
  paramMapObs;

  courseService:CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    //extracting route parameter property
    // this.courseId = this.activeRoute.snapshot.params['id'];
    // this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
    // this.activeRoute.params.subscribe((data)=>{
    //   this.courseId = +data['id'];
    //   this.selectedCourse = this.courseService.courses.find(course=> course.id === this.courseId);
    // })

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data)=>{
      this.courseId = +data.get('id');
      this.selectedCourse = this.courseService.courses.find(course=> course.id === this.courseId);
    })
  }

  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}

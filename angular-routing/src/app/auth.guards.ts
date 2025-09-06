import { inject } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { CourseService } from "./services/course.service";

export const canActivate = ()=>{
    const authService:AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if(authService.IsAuthenticated()){
        return true;
    }else{
        router.navigate(['/login'])
        return false;
    }
}

export const canActivateChild =()=>{
    return canActivate();
}

export const resolve = () =>{
    const courseService = inject(CourseService)
    return courseService.getAllcourses();
}
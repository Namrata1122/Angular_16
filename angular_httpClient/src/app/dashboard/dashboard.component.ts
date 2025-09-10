import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../Model/task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, Subscription } from 'rxjs';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  showTaskDetails:boolean = false;
  allTasks: Task[]=[];
  taskService:TaskService = inject(TaskService)
  currentTaskId: string ='';
  isLoading : boolean = false;

  currentTask:Task |null = null;

  errorMessage:string | null = null;

  editMode:boolean=false;
  selectedTask:Task;

  errorSub: Subscription ;

  ngOnInit(){
    this.fetchAllTasks();
    this.errorSub = this.taskService.errorSubject.subscribe({next:(httpError)=>{
      this.setErrorMessage(httpError);
    }});
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode = false;
    this.selectedTask = {title:'',desc:'',assignedTo:'',createdAt:'',priority:'',status:''}
  }

  ShowCurrentTaskDetails(id:string |undefined){
    this.showTaskDetails = true;
    this.taskService.getTaskDetails(id).subscribe({next:(data:Task)=>{
      this.currentTask = data;
    }});
  }

  CloseTaskDetails(){
    this.showTaskDetails = false;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }

  CreateOrUpdateTask(data:Task){
    if(!this.editMode)
      this.taskService.CreateTask(data);
    else
      this.taskService.UpdateTask(this.currentTaskId,data);
  }

  /*{
  key:{},
  key:{}
  }*/ 

  FetchAllTaskClicked(){
    this.fetchAllTasks();
  }

  private fetchAllTasks(){
    this.isLoading = true
    this.taskService.GetAllTasks().subscribe({next:(tasks)=>{
      this.allTasks=tasks;
      this.isLoading= false;
    },error:(error)=>{
      this.errorMessage = error.message;
      this.setErrorMessage(error);
      this.isLoading = false;
    }})
  }

  private setErrorMessage(err:HttpErrorResponse){
    console.log(err);
    if(err.error.error === 'Permission denied'){
      this.errorMessage = 'You do not have permission to perform this action'
    }else{
      this.errorMessage = err.message;
    }

    setTimeout(()=>{
      this.errorMessage = null;
    },3000)
  }

  DeleteTask(id:string){
    this.taskService.DeleteTask(id);
  }

  DeleteAllTasks(){
    this.taskService.DeleteAllTasks();
  }

  OnEditTaskClicked(id:string| undefined){
    this.currentTaskId = id;

    this.showCreateTaskForm = true;
    this.editMode = true;

    this.selectedTask = this.allTasks.find((task)=>{return task.id === id});
  }
}


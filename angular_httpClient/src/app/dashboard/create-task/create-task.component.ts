import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Model/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  @Input() isEditMode:boolean = false;

  @Input() selectedTask:Task;

  @ViewChild('taskForm') taskForm:NgForm;

  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  EmitTaskData : EventEmitter<Task> = new EventEmitter<Task>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  OnFormSubmitted(form:NgForm){
    this.EmitTaskData.emit(form.value);
    this.CloseForm.emit(false);
  }

  ngAfterViewInit(){
    setTimeout(()=>{
      console.log(this.taskForm.value)
      this.taskForm.form.patchValue(this.selectedTask);
    },0);
    
  }
}

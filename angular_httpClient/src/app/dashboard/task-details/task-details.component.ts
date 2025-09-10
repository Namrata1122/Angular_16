import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Model/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Output()
  CloseDetailView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() currentTask: Task | null = null;;

  OnCloseTaskDetail(){
    this.CloseDetailView.emit(false);
  }
}

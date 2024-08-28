import { Component, EventEmitter, inject, input, Output,Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { entered } from './entered.model';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  // @Output() add=new EventEmitter<NewTaskData>();
  @Output() close=new EventEmitter<void>();
  
  // entered?:entered;
  private tasksService=inject(TasksService);
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  onCloseAddTask()
  {
    this.close.emit();
  }
  onSubmit()
  {
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDate
    },this.userId);
    this.close.emit();
  }
}

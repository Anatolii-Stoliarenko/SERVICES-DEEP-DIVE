import { Component, EventEmitter, Output, inject, input } from "@angular/core";

import { TaskItemComponent } from "./task-item/task-item.component";
import { Task, TaskStatus, ViewMode } from "../task.model";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-tasks-list",
  standalone: true,
  templateUrl: "./tasks-list.component.html",
  styleUrl: "./tasks-list.component.css",
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  tasks = input.required<Task[]>();
  private taskSefvice = inject(TasksService);

  @Output() chagedViewMode = new EventEmitter();
  @Output() chagedTaskStatus = new EventEmitter();

  taskService = inject(TasksService);

  constructor() {}

  onChangeViewModel(veiwMode: string) {
    this.taskSefvice.changeViewMode(veiwMode as ViewMode);
    this.chagedViewMode.emit();
  }

  onChagedStatus() {
    this.chagedTaskStatus.emit();
  }
}

import { Component, inject } from "@angular/core";

import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { TasksService } from "./tasks.service";
import { Task } from "./task.model";

@Component({
  selector: "app-tasks",
  standalone: true,
  templateUrl: "./tasks.component.html",
  imports: [NewTaskComponent, TasksListComponent],
})
export class TasksComponent {
  private tasksService = inject(TasksService);
  tasks: Task[] = [];

  constructor() {
    this.getTasks();
  }

  onCgangeStatus(status: string) {
    this.tasks = this.tasksService.findTasks(status);
  }

  onNewTask(data: { title: string; description: string }) {
    this.tasksService.addTask(data.title, data.description);
    this.tasks = this.tasksService.getTasks();
  }

  getTasks() {
    this.tasks = this.tasksService.getTasks();
  }
}

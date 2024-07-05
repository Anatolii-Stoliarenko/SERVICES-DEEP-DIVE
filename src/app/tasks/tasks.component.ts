import { Component, OnInit, inject } from "@angular/core";

import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { TasksService } from "./tasks.service";
import { Task, ViewMode } from "./task.model";

@Component({
  selector: "app-tasks",
  standalone: true,
  templateUrl: "./tasks.component.html",
  imports: [NewTaskComponent, TasksListComponent],
})
export class TasksComponent implements OnInit {
  private tasksService = inject(TasksService);
  tasks: Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.tasksService.getTasks();
  }

  onCgangedViewMode() {
    this.tasks = this.tasksService.getTasks();
  }

  onNewTask(data: { title: string; description: string }) {
    this.tasksService.addTask(data.title, data.description);
    this.getTasks();
  }

  onChagedTaskStatus() {
    this.getTasks();
  }
}

import { Injectable, inject } from "@angular/core";

import { Task, TaskStatus, ViewMode } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  private tasks: Task[] = this.loadFromLocalStorage();
  private viewMode: ViewMode = "ALL";
  private loggingService = inject(LoggingService);

  private saveTaskToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  private loadFromLocalStorage(): Task[] {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }

  changeViewMode(viewMode: ViewMode) {
    this.viewMode = viewMode;
  }
  addTask(title: string, description: string) {
    const task: Task = {
      title: title,
      description: description,
      id: Math.random().toString(),
      status: "OPEN",
    };
    this.tasks.unshift(task);
    this.saveTaskToLocalStorage();
    this.loggingService.log("ADDED NEW TASK WITH TITTLE: " + title);
  }

  getTasks(taskId = "", taskStatus = "") {
    let filteredTasks: Task[] = this.tasks;

    if (this.viewMode !== "ALL") {
      filteredTasks = this.tasks.filter(
        (task) => task.status === this.viewMode
      );
    }
    if (taskId) {
      filteredTasks = filteredTasks.filter((task) => task.id === taskId);
    }
    if (taskStatus) {
      filteredTasks = filteredTasks.filter(
        (task) => task.status === taskStatus
      );
    }

    return filteredTasks;
  }

  changeTaskStatus(taskId: string, status: TaskStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    this.saveTaskToLocalStorage();
    this.loggingService.log("CHANGED TASK'S STATUS: " + status);
  }
}

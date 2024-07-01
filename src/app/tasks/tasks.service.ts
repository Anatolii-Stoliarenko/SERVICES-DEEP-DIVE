import { Injectable } from "@angular/core";

import { Task, TaskStatus } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  private tasks: Task[] = [];

  constructor() {}

  addTask(title: string, description: string) {
    const task: Task = {
      title: title,
      description: description,
      id: Math.random().toString(),
      status: "OPEN",
    };
    this.tasks.unshift(task);
  }

  getTasks() {
    const task = this.tasks;
    return task;
  }

  findTasks(status: string) {
    if (status === "ALL") {
      return this.getTasks();
    }
    const tasks = this.tasks.filter((task) => task.status === status);
    return tasks;
  }
}

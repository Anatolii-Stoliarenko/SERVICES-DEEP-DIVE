import { Component, EventEmitter, Output, input } from "@angular/core";

import { TaskItemComponent } from "./task-item/task-item.component";
import { Task } from "../task.model";

@Component({
  selector: "app-tasks-list",
  standalone: true,
  templateUrl: "./tasks-list.component.html",
  styleUrl: "./tasks-list.component.css",
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  tasks = input.required<Task[]>();
  @Output() selectedFilter = new EventEmitter<string>();

  // selectedFilter = signal<string>("all");

  constructor() {}

  onChangeTasksFilter(filter: string) {
    // this.selectedFilter.set(filter);
    this.selectedFilter.emit(filter);
  }
}

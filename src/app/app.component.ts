import { Component } from "@angular/core";

import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [TasksComponent],
})
export class AppComponent {}

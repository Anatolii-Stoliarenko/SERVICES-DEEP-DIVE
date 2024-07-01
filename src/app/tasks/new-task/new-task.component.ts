import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  inject,
  viewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-new-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>("form");
  @Output() newTask = new EventEmitter<{
    title: string;
    description: string;
  }>();

  onAddTask(title: string, description: string) {
    this.newTask.emit({ title: title, description: description });
    this.formEl()?.nativeElement.reset();
  }
}

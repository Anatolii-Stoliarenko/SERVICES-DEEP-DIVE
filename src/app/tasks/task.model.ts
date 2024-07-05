export type TaskStatus = "OPEN" | "IN_PROGRESS" | "DONE";
export type ViewMode = "OPEN" | "IN_PROGRESS" | "DONE" | "ALL";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

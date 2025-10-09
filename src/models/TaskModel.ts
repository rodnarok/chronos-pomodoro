import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  title: string;
  duration: number;
  completeDate: number | null; // quando o timer chega ao final
  interruptDate: number | null; // quando a task for interrompida
  type: keyof TaskStateModel["config"]; // 'workTime' | 'shortBreakTime' | 'longBreakTime'
};

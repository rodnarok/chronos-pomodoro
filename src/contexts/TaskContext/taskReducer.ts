import type { TaskStateModel } from "../../models/TaskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNextCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsRemaining = newTask ? newTask.duration * 60 : 0;

      return {
        ...state,
        activeTask: newTask ? newTask : null,
        currentCycle: nextCycle,
        secondsRemaining, // Poderia ser secondsRemaining: secondsRemaining, mas como o nome é igual, pode omitir
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
  }

  // Sempre deve retornar o estado
  return state;
}

// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função pura que recebe o estado atual e uma ação, e retorna um novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente um objeto com um type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from "../../models/TaskModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload?: TaskModel;
    }
  | {
      type: TaskActionTypes.INTERRUPT_TASK;
      payload?: TaskModel;
    }
  | {
      type: TaskActionTypes.RESET_STATE;
    };

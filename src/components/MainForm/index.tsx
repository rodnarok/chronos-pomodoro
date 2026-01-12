import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";

export function MainForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    console.log("Creating new task:", taskName);

    if (!taskName) {
      alert("Digite o nome da tarefa!");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 0,
      type: "workTime",
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => ({
      ...prevState,
      config: { ...prevState.config },
      activeTask: newTask,
      currentCycle: 1, // conferir
      secondsRemaining, // conferir
      formattedSecondsRemaining: "00:00", // conferir
      tasks: [...prevState.tasks, newTask],
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div>
        <DefaultInput
          labelText="Task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
        />
      </div>

      <div className="formRow">
        <p>Lorem ipsum dolor sit amet</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon color="green" />} type="submit" />
      </div>
    </form>
  );
}

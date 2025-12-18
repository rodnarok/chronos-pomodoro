import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
  const { state } = useTaskContext();
  return <h1 className={styles.heading}>{state.formattedSecondsRemaining}</h1>;
}

import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a>Entenda como funciona a tecnica de pomodoro</a>
      <a>Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤</a>
    </footer>
  );
}

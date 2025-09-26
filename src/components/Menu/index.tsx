import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");
  return (
    <div className={styles.menu}>
      <a
        className={styles.menuLink}
        href="/"
        aria-label="Ir para Início"
        title="Ir para Início"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="/"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="/"
        aria-label="Ir para Configurações"
        title="Ir para Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="/"
        aria-label="Mudar tema"
        title="Mudar tema"
      >
        <SunIcon />
      </a>
    </div>
  );
}

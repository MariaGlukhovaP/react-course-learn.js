import { LogInOut } from "../log-in-out/log-in-out";
import { SwitchTheme } from "../switch-theme/switch-theme";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <SwitchTheme />
      <h1 className={styles.title}>Food Delivery App</h1>
      <LogInOut />
    </header>
  );
};

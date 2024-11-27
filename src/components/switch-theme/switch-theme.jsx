import { Button } from "../button/button";
import { useTheme } from "../theme-context/use-theme";

import styles from "./switch-theme.module.css";

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      text="Toggle Theme"
      buttonType={styles.switchTheme}
      onClick={toggleTheme}
    />
  );
};

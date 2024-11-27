import classNames from "classnames";
import styles from "./button.module.css";
import { useTheme } from "../theme-context/use-theme";

export const Button = ({ text, buttonType, onClick, isActive }) => {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, buttonType, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.active]: isActive,
      })}
    >
      {text}
    </button>
  );
};

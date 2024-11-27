import { Button } from "../button/button";

import styles from "./tab.module.css";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button
      text={title}
      buttonType={styles.tab}
      onClick={onClick}
      isActive={isActive}
    />
  );
};

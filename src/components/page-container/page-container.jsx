import styles from "./page-container.module.css";

export const PageContainer = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};

import { TabLink } from "../tab-link/tab-link";

import styles from "./tab-links.module.css";

export const TabLinks = () => {
  return (
    <div className={styles.tabLinks}>
      <TabLink href="/restaurants" title="Restaurants" />
    </div>
  );
};

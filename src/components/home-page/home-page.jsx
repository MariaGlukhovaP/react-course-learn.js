import { Link } from "react-router-dom";
import { Description } from "../description/description";
import styles from "./home-page.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Description />
      <div className={styles.linkContainer}>
        <Link to="/restaurants" className={styles.link}>
          Restaurants
        </Link>
      </div>
    </div>
  );
};

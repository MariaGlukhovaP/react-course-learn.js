import { useAuth } from "../auth-context/use-auth";
import { Button } from "../button/button";

import styles from "./log-in-out.module.css";

export const LogInOut = () => {
  const { user, setUser, isAuthed } = useAuth();

  return (
    <div>
      {!isAuthed(user) && (
        <Button
          text="Log In"
          buttonType={styles.logInButton}
          onClick={() => setUser("Maria")}
        />
      )}

      {isAuthed(user) && (
        <div className={styles.logOutContainer}>
          <span>{user}</span>
          <Button
            text="Log Out"
            buttonType={styles.logInButton}
            onClick={() => setUser(undefined)}
          />
        </div>
      )}
    </div>
  );
};

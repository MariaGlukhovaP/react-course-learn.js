import { useState } from "react";
import { AuthContext } from ".";

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  const isAuthed = (user) => {
    return Boolean(user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};

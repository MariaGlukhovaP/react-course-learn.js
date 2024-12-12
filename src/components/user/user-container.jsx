import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";
import { User } from "./user";

export const UserContainer = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));

  if (!user?.name) return null;

  return <User name={user.name} />;
};

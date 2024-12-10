import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/users-slice";
import { User } from "./user";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";

export const UserContainer = ({ userId }) => {
  const requestStatus = useRequest(getUsers);

  const user = useSelector((state) => selectUserById(state, userId));

  if (!user?.name) return null;

  return <User name={user.name} />;
};

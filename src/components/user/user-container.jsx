import { User } from "./user";
import { getUsers } from "../../services/get-users";

export const UserContainer = async ({ userId }) => {
  const users = await getUsers();

  const user = users.find(({ id }) => id === userId);

  if (!user?.name) return null;

  return <User name={user.name} />;
};

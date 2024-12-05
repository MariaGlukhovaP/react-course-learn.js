import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Menu } from "./menu";

export const MenuContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { menu } = restaurant;

  if (!menu) {
    return null;
  }

  return <Menu menu={menu} />;
};

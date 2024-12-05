import { useParams } from "react-router-dom";
import { MenuContainer } from "../menu/menu-container";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <MenuContainer id={restaurantId} />
    </div>
  );
};

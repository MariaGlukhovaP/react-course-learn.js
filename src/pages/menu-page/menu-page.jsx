import { useParams } from "react-router-dom";
import { MenuContainer } from "../../components/menu/menu-container";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <MenuContainer restaurantId={restaurantId} />
    </div>
  );
};

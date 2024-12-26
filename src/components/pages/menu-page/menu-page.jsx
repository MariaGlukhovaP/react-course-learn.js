import { Menu } from "../../menu/menu";

export const MenuPage = async ({ menu }) => {
  return (
    <div>
      <Menu menu={menu} />
    </div>
  );
};

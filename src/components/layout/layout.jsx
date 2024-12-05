import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Cart />
      <Footer />
    </div>
  );
};

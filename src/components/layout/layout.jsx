import { AuthContextProvider } from "../auth-context/auth-context";
import { Description } from "../description/description";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { ProgressBar } from "../progress-bar/progress-bar";
import { ThemeContextProvider } from "../theme-context/theme-context";

export const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <div>
          <ProgressBar />
          <Header />
          <Description />
          {children}
          <Footer />
        </div>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

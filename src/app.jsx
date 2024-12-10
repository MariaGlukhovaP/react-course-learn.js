import { Layout } from "./components/layout/layout";
import "./app.css";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HomePage } from "./pages/home-page/home-page";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RestaurantsPage } from "./pages/restaurants-page/restaurants-page";
import { RestaurantPage } from "./pages/restaurant-page/restaurant-page";
import { MenuPage } from "./pages/menu-page/menu-page";
import { ReviewsPage } from "./pages/reviews-page/reviews-page";
import { DishPage } from "./pages/dish-page/dish-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/restaurants",
        element: <RestaurantsPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              { index: true, element: <Navigate to="menu" /> },
              {
                path: "menu",
                element: <MenuPage />,
              },
              {
                path: "reviews",
                element: <ReviewsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
  { path: "dish/:dishId", element: <DishPage /> },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

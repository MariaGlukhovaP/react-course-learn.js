import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import "./app.css";
import { AuthContextProvider } from "./components/auth-context/auth-context";
import { ThemeContextProvider } from "./components/theme-context/theme-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HomePage } from "./components/home-page/home-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestaurantPage } from "./components/restaurant-page/restaurant-page";
import { MenuPage } from "./components/menu-page/menu-page";
import { ReviewsPage } from "./components/reviews-page/reviews-page";
import { DishPage } from "./components/dish-page/dish-page";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/restaurants",
    element: <RestaurantsPage />,
    children: [
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantPage />,
        children: [
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
  { path: "dish/:dishId", element: <DishPage /> },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};

import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/restaurants-slice";
import { dishesSlice } from "./entities/dishes/dishes-slice";
import { reviewsSlice } from "./entities/reviews/reviews-slice";
import { usersSlice } from "./entities/users/users-slice";
import { cartSlice } from "./UI/cart/cart-slice";
import { requestSlice } from "./UI/request/request-slice";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  console.log(store);
  return next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddliwares) =>
    getDefaultMiddliwares().concat(loggerMiddleware),
});

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("dishes/getDishes  no data");
      return;
    }

    return result;
  }
);
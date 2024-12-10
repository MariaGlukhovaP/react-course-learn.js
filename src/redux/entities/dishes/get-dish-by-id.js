import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishes-slice";

export const getDishById = createAsyncThunk(
  "dish/getDishById",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("dish/getDishById no data");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) =>
      selectDishById(getState(), id).length === 0,
  }
);

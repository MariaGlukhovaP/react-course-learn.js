import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurants-slice";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);

    const result = await response.json();

    if (!response.length) {
      rejectWithValue("restaurants/getRestaurantById no data");
    }

    return result;
  },
  {
    condition: (id, { getState }) => !selectRestaurantById(getState(), id),
  }
);

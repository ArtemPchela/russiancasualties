import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface State {
  byDateCasualties: string;
  status: "idle" | "pending" | "success" | "rejected";
}

const initialState: State = {
  byDateCasualties: "",
  status: "idle",
};

const fetchByDateCasualties = async (id: string) => {
  const CASUALTIES_BY_DATE_API = {
    method: "GET",
    url: `https://russianwarship.rip/api/v1/statistics/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios(CASUALTIES_BY_DATE_API);
  return response.data;
};

export const getByDateCasualties = createAsyncThunk(
  "byCasualties/getByDateCasualties",
  async (id: string, thunkAPI) => {
    try {
      return await fetchByDateCasualties(id);
    } catch (error) {
      return thunkAPI.rejectWithValue("Server error");
    }
  },
);

const byDateCasualtiesSlice = createSlice({
  name: "byCasualties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getByDateCasualties.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        getByDateCasualties.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.byDateCasualties = action.payload;
          state.status = "success";
        },
      )
      .addCase(getByDateCasualties.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default byDateCasualtiesSlice.reducer;

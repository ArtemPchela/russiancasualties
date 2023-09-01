import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface State {
  allCasualties: any;
  status: "idle" | "pending" | "success" | "rejected";
}

const initialState: State = {
  allCasualties: "",
  status: "idle",
};

const fetchCasualties = async () => {
  const CASUALTIES_API = {
    method: "GET",
    url: "https://russianwarship.rip/api/v1/statistics/latest",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios(CASUALTIES_API);
  return response.data;
};

export const getAllCasualties = createAsyncThunk(
  "casualties/getAllCasualties",
  async (_, thunkAPI) => {
    try {
      return await fetchCasualties();
    } catch (error) {
      return thunkAPI.rejectWithValue("Server error");
    }
  },
);

const casualtiesSlice = createSlice({
  name: "casualties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCasualties.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        getAllCasualties.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.allCasualties = action.payload;
          state.status = "success";
        },
      )
      .addCase(getAllCasualties.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default casualtiesSlice.reducer;

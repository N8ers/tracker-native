import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as http from "../util/http"

export const fetchWeights = createAsyncThunk(
  "weight/fetchWeights",
  async () => {
    const response = await http.fetchWeights()
    return response
  }
)

export const addTodaysWeight = createAsyncThunk(
  "weight/postTodaysWeight",
  async ({ weight }) => {
    const response = await http.postTodaysWeight(weight)
    return response
  }
)

const weightsSlice = createSlice({
  name: "weights",
  initialState: {
    weights: [],
    loading: false,
    error: false,
  },
  reducers: {
    removeWeight: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeights.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchWeights.fulfilled, (state, action) => {
        state.weights = action.payload
        state.loading = false
      })
      .addCase(fetchWeights.rejected, (state) => {
        state.loading = false
        state.error = "ERROR!!!!!"
      })
    builder
      .addCase(addTodaysWeight.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(addTodaysWeight.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(addTodaysWeight.rejected, (state) => {
        state.loading = false
        state.error = "ERROR!!!!!"
      })
  },
})

export default weightsSlice.reducer

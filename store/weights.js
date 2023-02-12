import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as http from "../util/http"
import { showSuccessToast } from "../util/toasts"

// export const fetchWeights = createAsyncThunk(
//   "weight/fetchWeights",
//   async () => {
//     const response = await http.fetchWeights()
//     return response
//   }
// )

// export const getTodaysWeight = createAsyncThunk(
//   "weight/getTodaysWeight",
//   async () => {
//     const response = await http.getTodaysWeight()
//     return response.length ? response[0].weight : null
//   }
// )

// export const addTodaysWeight = createAsyncThunk(
//   "weight/postTodaysWeight",
//   async ({ weight }) => {
//     const response = await http.postTodaysWeight(weight)
//     return response
//   }
// )

// export const updateTodaysWeight = createAsyncThunk(
//   "weight/patchTodaysWeight",
//   async ({ weight }) => {
//     const response = await http.patchTodaysWeight(weight)
//     return response
//   }
// )

const weightsSlice = createSlice({
  name: "weights",
  initialState: {
    weights: [],
    todaysWeight: null,
    loading: false,
    error: false,
  },
  reducers: {
    removeWeight: (state) => {},
  },
  extraReducers: (builder) => {
    builder
    // .addCase(fetchWeights.pending, (state) => {
    //   state.loading = true
    //   state.error = false
    // })
    // .addCase(fetchWeights.fulfilled, (state, action) => {
    //   state.weights = action.payload
    //   state.loading = false
    // })
    // .addCase(fetchWeights.rejected, (state) => {
    //   state.loading = false
    //   state.error = "ERROR!!!!!"
    // })
    builder
    // .addCase(addTodaysWeight.pending, (state) => {
    //   state.loading = true
    //   state.error = false
    // })
    // .addCase(addTodaysWeight.fulfilled, (state, action) => {
    //   state.todaysWeight = action.payload.weight
    //   state.loading = false
    //   showSuccessToast({ headerText: "Added todays weight!" })
    // })
    // .addCase(addTodaysWeight.rejected, (state) => {
    //   state.loading = false
    //   state.error = "ERROR!!!!!"
    // })
    builder
    // .addCase(getTodaysWeight.pending, (state) => {
    //   state.loading = true
    //   state.error = false
    // })
    // .addCase(getTodaysWeight.fulfilled, (state, action) => {
    //   state.todaysWeight = action.payload
    //   state.loading = false
    // })
    // .addCase(getTodaysWeight.rejected, (state) => {
    //   state.loading = false
    //   state.error = "ERROR!!!!!"
    // })
    builder
    // .addCase(updateTodaysWeight.pending, (state) => {
    //   state.loading = true
    //   state.error = false
    // })
    // .addCase(updateTodaysWeight.fulfilled, (state, action) => {
    //   state.todaysWeight = action.payload.weight
    //   state.loading = false
    //   showSuccessToast({ headerText: "Updated todays weight!" })
    // })
    // .addCase(updateTodaysWeight.rejected, (state) => {
    //   state.loading = false
    // })
  },
})

export default weightsSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const weightsSlice = createSlice({
  name: "weights",
  initialState: {
    weights: [
      { id: 1, weight: 194, date: "2022-12-24T05:00:00.000Z", user_id: 1 },
    ],
  },
  reducers: {
    fetchWeights: (state, action) => {
      console.log("reducers/fetchWeights")
      state.weights
    },
    removeWeight: (state) => {},
  },
})

export const fetchWeights = weightsSlice.actions.fetchWeights
export default weightsSlice.reducer

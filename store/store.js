import { configureStore } from "@reduxjs/toolkit"

import weightsReducer from "./weights"

export const store = configureStore({
  reducer: {
    weight: weightsReducer,
  },
})

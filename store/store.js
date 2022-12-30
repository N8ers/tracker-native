import { configureStore } from "@reduxjs/toolkit"

import weightsReducer from "./weights"
import userReducer from "./user"

export const store = configureStore({
  reducer: {
    weight: weightsReducer,
    user: userReducer,
  },
})

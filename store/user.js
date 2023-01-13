import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as http from "../util/http"
import { setToken, removeToken } from "../util/deviceStorage"
import { showSuccessToast } from "../util/toasts"

const initState = {
  isLoggedIn: false,
  username: null,
  userId: null,
  darkmode: false,
  loading: false,
}

export const authToken = createAsyncThunk("user/authToken", async () => {
  // what should i do about loading spinner here?
  // maybe use the https://www.npmjs.com/package/expo-splash-screen lib?
  const response = await http.authenticateToken()
  return response
})

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ username, password }) => {
    const response = await http.logUserIn({ username, password })
    setToken(response.accessToken)
    return response.user
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  reducers: {
    logout: () => {
      removeToken(null)
      showSuccessToast({ headerText: "You logged out successfully." })
      return initState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.username = action.payload.username
        state.userId = action.payload.id
        state.darkmode = action.payload.darkmode
        state.loading = false
        state.isLoggedIn = true
      })
      .addCase(authUser.rejected, (state) => {
        state.loading = false
        state.error = "ERROR!!!!!"
      })
      .addCase(authToken.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(authToken.fulfilled, (state, action) => {
        if (action?.payload?.id) {
          state.username = action.payload.username
          state.userId = action.payload.id
          state.darkmode = action.payload.darkmode
          state.isLoggedIn = true
        }

        state.loading = false
      })
      .addCase(authToken.rejected, (state) => {
        state.loading = false
        state.error = "ERROR!!!!!"
      })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer

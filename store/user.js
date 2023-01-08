import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as http from "../util/http"
import { setToken, getToken, removeToken } from "../util/deviceStorage"

const initState = {
  isLoggedIn: false,
  username: null,
  userId: null,
  darkmode: false,
  loading: false,
}

export const authToken = createAsyncThunk("user/authToken", async () => {
  const storedToken = await getToken("token")
  console.log("token ? ", storedToken)
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
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as http from "../util/http"
import { setToken, getToken } from "../util/deviceStorage"

const initState = {
  token: false,
  username: null,
  userId: null,
  darkmode: false,
  loading: false,
}

export const authToken = createAsyncThunk("user/authToken", async () => {
  console.log("authToken Thunk")
  const storedToken = await getToken("token")
  console.log("token ? ", storedToken)
})

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ username, password }) => {
    const response = await http.logUserIn({ username, password })
    setToken("hiii - 1")
    return response
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(authUser.fulfilled, (state, action) => {
        console.log(action)
        state.username = action.payload.username
        state.userId = action.payload.id
        state.darkmode = action.payload.darkmode
        state.loading = false
      })
      .addCase(authUser.rejected, (state) => {
        state.loading = false
        state.error = "ERROR!!!!!"
      })
  },
})

export default userSlice.reducer

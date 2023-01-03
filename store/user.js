import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import * as http from "../util/http"

const initState = {
  token: false,
  username: null,
  darkmode: false,
}

export const authToken = createAsyncThunk("user/authToken", async () => {
  console.log("authToken Thunk")
})

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ username, password }) => {
    const response = await http.logUserIn({ username, password })
    console.log("response ", response)
    // TODO:
    // - add loading spinner
    // - error message if failure
    // - update userstate if success

    // return response
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: initState,
})

export default userSlice.reducer

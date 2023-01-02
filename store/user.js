import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initState = {
  token: null,
  username: null,
  darkmode: false,
}

export const authToken = createAsyncThunk("user/authToken", async () => {
  console.log("authToken Thunk")
})

export const authUser = createAsyncThunk("user/authUser", async () => {
  console.log("authUser Thunk")
})

const userSlice = createSlice({
  name: "user",
  initialState: initState,
})

export default userSlice.reducer

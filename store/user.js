import { createSlice } from "@reduxjs/toolkit"

const initState = {
  token: null,
  username: null,
  darkmode: false,
}

const userSlice = createSlice({
  name: "user",
  initialState: initState,
})

export default userSlice.reducer

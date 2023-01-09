import axios from "axios"

import { getToken } from "../util/deviceStorage"

/**
 * TODO
 * we want this initial request to be "paged" to the last 30 enteries
 * we can add more date range options later.
 * NOW we need to make a chart
 * Let UI add todays weight
 */
const USER_ID = 1

const IS_PROD = false

let authAxios

const configAxios = async () => {
  const accessToken = await getToken("token")
  const Authorization = accessToken ? `Bearer ${accessToken}` : ""

  authAxios = axios.create({
    baseURL: IS_PROD
      ? "https://tracker-api-production-ec2a.up.railway.app"
      : "http://localhost:4000",
    headers: {
      Authorization,
    },
  })
}

// const authAxios = axios.create({
//   baseURL: IS_PROD
//     ? "https://tracker-api-production-ec2a.up.railway.app"
//     : "http://localhost:4000",
//   headers: {
//     Authorization: `Bearer 3666`,
//   },
// })

export const fetchWeights = async () => {
  try {
    const result = await authAxios.get("/weights/" + USER_ID)
    return result.data
  } catch (error) {
    console.log("error getting data ", error)
  }
}

export const postTodaysWeight = async (weight) => {
  try {
    const data = { userId: USER_ID, weight }
    const result = await authAxios.post("/todays-weight", data)
    return result.data
  } catch (error) {
    console.log("error posting todays weight ", error)
  }
}

export const logUserIn = async (payload) => {
  try {
    const result = await authAxios.post("/auth", payload)
    return result.data
  } catch (error) {
    console.log("error logging user in ", error)
  }
}

export const authenticateToken = async () => {
  await configAxios()
  try {
    const result = await authAxios.post("/auth-token")
    return result.data
  } catch (error) {
    console.log("error authenticating token, try logging in ", error)
  }
}

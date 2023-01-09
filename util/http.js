import axios, { AxiosRequestConfig } from "axios"

const IS_PROD = false
const BASE_URL = IS_PROD
  ? "https://tracker-api-production-ec2a.up.railway.app"
  : "http://localhost:4000"

/**
 * TODO
 * we want this initial request to be "paged" to the last 30 enteries
 * we can add more date range options later.
 * NOW we need to make a chart
 * Let UI add todays weight
 */
const USER_ID = 1

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const fetchWeights = async () => {
  try {
    const result = await axios.get(BASE_URL + "/weights/" + USER_ID)
    return result.data
  } catch (error) {
    console.log("error getting data ", error)
  }
}

export const postTodaysWeight = async (weight) => {
  try {
    const data = { userId: USER_ID, weight }
    const result = await axios.post(BASE_URL + "/todays-weight", data)
    return result.data
  } catch (error) {
    console.log("error posting todays weight ", error)
  }
}

export const logUserIn = async (payload) => {
  try {
    const result = await axios.post(BASE_URL + "/auth", payload)
    return result.data
  } catch (error) {
    console.log("error logging user in ", error)
  }
}

export const authenticateToken = async (payload) => {
  // if token is valid
  // return user data, and default weight data
  try {
    const result = await axios.post(BASE_URL + "/auth-token", payload)
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log("error authenticating token, try logging in ", error)
  }
}

import axios from "axios"

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
    console.log("result.data bro ", result.data)
    return result.data
  } catch (error) {
    console.log("error logging user in ", error)
  }
}

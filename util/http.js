import axios from "axios"

import { getToken } from "../util/deviceStorage"
import { showErrorToast } from "../util/toasts"

/**
 * TODO
 * we want this initial request to be "paged" to the last 30 enteries
 * we can add more date range options later.
 * NOW we need to make a chart
 * Let UI add todays weight
 */

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

export const fetchWeights = async () => {
  try {
    const result = await authAxios.get("/weights")
    return result.data
  } catch (error) {
    showErrorToast({
      headerText: "There was an error getting weights.",
      subText: error.message,
    })
  }
}

export const getTodaysWeight = async (weight) => {
  try {
    const result = await authAxios.get("/todays-weight")
    return result.data
  } catch (error) {
    showErrorToast({
      headerText: "Error getting todays weight. Please try again.",
      subText: error.message,
    })
  }
}

export const postTodaysWeight = async (weight) => {
  try {
    const result = await authAxios.post("/todays-weight", { weight })
    return result.data
  } catch (error) {
    showErrorToast({
      headerText: "Error adding todays weight. Please try again.",
      subText: error.message,
    })
  }
}

export const patchTodaysWeight = async (weight) => {
  try {
    const result = await authAxios.patch("/todays-weight", { weight })
    return result.data
  } catch (error) {
    showErrorToast({
      headerText: "Error updating todays weight. Please try again.",
      subText: error.message,
    })
  }
}

export const logUserIn = async (payload) => {
  try {
    const result = await authAxios.post("/auth", payload)
    return result.data
  } catch (error) {
    showErrorToast({
      headerText: "Login failed. Please try again.",
      subText: error.message,
    })
  }
}

export const authenticateToken = async () => {
  await configAxios()
  try {
    const result = await authAxios.post("/auth-token")
    return result.data
  } catch (error) {
    // showErrorToast({
    //   headerText: "Auth token failed. Please login.",
    //   subText: error.message,
    // })
  }
}

import axios from "axios"

const IS_PROD = false
const BASE_URL = IS_PROD
  ? "https://tracker-api-production-ec2a.up.railway.app"
  : "http://localhost:4000"

export const fetchWeights = async () => {
  const USER_ID = 1
  try {
    const result = await axios.get(BASE_URL + "/weights/" + USER_ID)
    console.log("result:: ", result.data)
    return result.data
  } catch (error) {
    console.log("error getting data ", error)
  }
}

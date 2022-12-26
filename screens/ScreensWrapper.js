// wraps the app so we have access to redux
// it calls network requests on laod
// handles loading spinner and globabl layout logic
// AppWrapper sounds like

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, View, ActivityIndicator } from "react-native"

import { fetchWeights } from "../store/weights"

export default function ScreensWrapper({ children }) {
  const isWeightsLoading = useSelector((state) => state.weight.loading)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWeights())
  }, [])

  return (
    <>
      {isWeightsLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        children
      )}
    </>
  )
}

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
})

// wraps the app so we have access to redux
// it calls network requests on laod
// handles loading spinner and globabl layout logic
// AppWrapper sounds like
// Maybe this is the 'ScreenManager'? idk what to call this.

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, View, ActivityIndicator, StatusBar } from "react-native"

import { authToken } from "../store/user"

import NotAuthenticatedNavigator from "../navigators/NotAuthenticatedNavigator"
import AuthenticatedNavigator from "../navigators/AuthenticatedNavigator"

export default function ScreensWrapper() {
  const isWeightsLoading = useSelector((state) => state.weight.loading)
  const isAuthLoading = useSelector((state) => state.user.loading)
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const isDarkmode = useSelector((state) => state.user.darkmode)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authToken())
  }, [])

  return (
    <>
      <StatusBar barStyle={isDarkmode ? "light-content" : "dark-content"} />

      {!isLoggedIn && <NotAuthenticatedNavigator />}
      {isLoggedIn && <AuthenticatedNavigator />}

      {(isWeightsLoading || isAuthLoading) && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
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
    opacity: 0.5,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
})

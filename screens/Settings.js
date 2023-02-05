import { Switch, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { logout, toggleDarkMode } from "../store/user"
import { ContentWrapper } from "../components/ContentWrapper"
import { AppButton } from "../components/AppButton"
import { AppText } from "../components/AppText"
import { useThemes } from "../hooks/useThemes"

export default function Settings() {
  const userData = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const themes = useThemes()

  function handleLogout() {
    dispatch(logout())
  }

  function toggleSwitch() {
    dispatch(toggleDarkMode(!userData.darkmode))
  }

  return (
    <>
      <ContentWrapper>
        <AppText style={styles.header}>Settings</AppText>
        <AppText>Username: {userData.username}</AppText>
        <AppText>Darkmode: {userData.darkmode.toString()}</AppText>
        <Switch onValueChange={toggleSwitch} value={userData.darkmode} />
        <AppButton title="Update" />
      </ContentWrapper>

      <AppButton title="logout" color="secondary" onPress={handleLogout} />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
})

import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

import { logout, toggleDarkMode } from "../store/user"

import { ContentWrapper } from "../components/ContentWrapper"
import { AppButton } from "../components/AppButton"
import { AppText } from "../components/AppText"
import { AppInput } from "../components/AppInput"
import { AppSwitch } from "../components/AppSwitch"

export default function Settings() {
  const userData = useSelector((state) => state.user)

  const [username, setUsername] = useState(userData.username)

  const dispatch = useDispatch()

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
        <AppInput value={username} onChangeText={setUsername} />
        <AppSwitch
          label="darkmode"
          value={userData.darkmode}
          onValueChange={toggleSwitch}
        />
        <AppButton style={styles.updateButton} title="Update" />
      </ContentWrapper>

      <View style={styles.buttonContainer}>
        <AppButton title="logout" color="secondary" onPress={handleLogout} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  updateButton: {
    marginTop: 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
})

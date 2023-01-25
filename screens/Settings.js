import { Text, Button, Switch } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { logout, toggleDarkMode } from "../store/user"
import { ContentWrapper } from "../components/ContentWrapper"
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
        <Text style={themes.action}>Settings</Text>
        <Text>Username: {userData.username}</Text>
        <Text>Darkmode: {userData.darkmode.toString()}</Text>
        <Switch onValueChange={toggleSwitch} value={userData.darkmode} />
        <Button title="Update" />
      </ContentWrapper>

      <Button title="logout" onPress={handleLogout} />
    </>
  )
}

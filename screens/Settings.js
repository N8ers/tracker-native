import { useEffect, useState } from "react"
import { Text, View, Button, Switch } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { logout, toggleDarkMode } from "../store/user"

import { darkmode, lightmode } from "../Styles"

export default function Settings() {
  const userData = useSelector((state) => state.user)

  const [themes, setTheme] = useState(darkmode)

  const dispatch = useDispatch()

  useEffect(() => {
    if (userData.darkmode) {
      setTheme(darkmode)
    } else {
      setTheme(lightmode)
    }
  }, [userData.darkmode])

  function handleLogout() {
    dispatch(logout())
  }

  function toggleSwitch() {
    dispatch(toggleDarkMode(!userData.darkmode))
  }

  return (
    <View>
      <Text style={themes.action}>Settings</Text>
      <Text>Username: {userData.username}</Text>
      <Text>Darkmode: {userData.darkmode.toString()}</Text>
      <Switch onValueChange={toggleSwitch} value={userData.darkmode} />
      <Button title="logout" onPress={handleLogout} />
    </View>
  )
}

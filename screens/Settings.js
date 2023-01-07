import { Text, View, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { logout } from "../store/user"

export default function Settings() {
  const userData = useSelector((state) => state.user)

  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(logout())
  }

  return (
    <View>
      <Text>Settings</Text>
      <Text>Username: {userData.username}</Text>
      <Text>Darkmode: {userData.darkmode.toString()}</Text>
      <Button title="logout" onPress={handleLogout} />
    </View>
  )
}

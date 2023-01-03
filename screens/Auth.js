import { useState } from "react"
import { useDispatch } from "react-redux"
import { View, StyleSheet, Button, TextInput } from "react-native"

import { authUser } from "../store/user"

export default function Auth() {
  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const attemptLogin = () => {
    dispatch(authUser({ username, password }))
  }

  return (
    <View style={styles.pageContainer}>
      <TextInput
        style={styles.usernameInput}
        placeholder="email"
        value={username}
        onChangeText={(newUsername) => setUsername(newUsername)}
      />
      <TextInput
        style={styles.passwordInput}
        placeholder="password"
        secureTextEntry={true}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Button title="login" onPress={attemptLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  usernameInput: {
    margin: 10,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  passwordInput: {
    margin: 10,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
})

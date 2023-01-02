import { useState } from "react"
import { Text, View, StyleSheet, Button, TextInput } from "react-native"

export default function Auth() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.pageContainer}>
      <Text>Login!</Text>
      <TextInput
        placeholder="email"
        value={username}
        onChangeText={(newUsername) => setUsername(newUsername)}
      />
      <TextInput
        placeholder="password"
        type="password"
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      <Button title="login" />
    </View>
  )
}

const styles = StyleSheet.create({})

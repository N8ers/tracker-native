import { Text, View, StyleSheet, Button, TextInput } from "react-native"

export default function Auth() {
  return (
    <View style={styles.pageContainer}>
      <Text>Login!</Text>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" type="password" />
      <Button title="login" />
    </View>
  )
}

const styles = StyleSheet.create({})

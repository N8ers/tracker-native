import { View, TextInput, StyleSheet } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function AppInput({ style, value, onChangeText }) {
  const themes = useThemes()

  return (
    <View style={[themes.text, style, styles.container]}>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => onChangeText(newValue)}
        value={value}
        keyboardType="numeric"
        textAlign="center"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    height: 45,
    margin: 12,
    fontSize: 24,
    padding: 10,
    color: "white",
    borderRadius: 20,
    backgroundColor: "black",
  },
})

import { View, TextInput, StyleSheet } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function AppInput({ style, value, onChangeText, centerText = false }) {
  const themes = useThemes()

  return (
    <View style={[themes.text, style, styles.container]}>
      <TextInput
        style={styles.input}
        onChangeText={(newValue) => onChangeText(newValue)}
        value={value}
        keyboardType="numeric"
        textAlign={centerText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  input: {
    height: 45,
    fontSize: 16,
    padding: 10,
    color: "white",
    borderRadius: 10,
    backgroundColor: "rgba(21, 23, 24, .8)",
  },
})

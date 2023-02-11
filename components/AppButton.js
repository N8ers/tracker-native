import { Pressable, Text, StyleSheet } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function AppButton({ style, title, color = "primary", onPress }) {
  const themes = useThemes()

  const buttonColors = {
    primary: themes.actionBackground,
    secondary: themes.secondaryBackground,
    danger: themes.dangerBackground,
  }

  return (
    <Pressable
      onPress={onPress}
      style={[buttonColors[color], styles.buttonWrapper, style]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 20,
    padding: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
  },
})

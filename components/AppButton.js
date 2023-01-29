import { Pressable, Text, StyleSheet } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function AppButton({ style, title, color = "primary", onPress }) {
  const themes = useThemes()

  return (
    <Pressable
      onPress={onPress}
      style={[
        color === "primary"
          ? themes.actionBackground
          : themes.secondaryBackground,
        styles.buttonWrapper,
        style,
      ]}
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

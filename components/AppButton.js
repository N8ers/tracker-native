import { Pressable, Text, StyleSheet } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function AppButton({ style, title, onPress }) {
  const themes = useThemes()

  return (
    <Pressable
      onPress={onPress}
      style={[themes.actionBackground, styles.buttonWrapper]}
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

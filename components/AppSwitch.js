import { View, StyleSheet, Switch } from "react-native"

import { useThemes } from "../hooks/useThemes"

import { AppText } from "./AppText"

export function AppSwitch({ style, label, value, onValueChange }) {
  const themes = useThemes()

  return (
    <View style={[themes.text, styles.container, style]}>
      <View style={styles.subContainer}>
        <AppText style={styles.label}>{label}</AppText>
        <Switch
          style={styles.switch}
          trackColor={{ true: themes.lightBackground, false: "orange" }}
          thumbColor={themes.secondary.color}
          value={value}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(21, 23, 24, .8)",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  switch: {},
})

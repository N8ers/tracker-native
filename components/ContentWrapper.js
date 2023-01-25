import { View, StyleSheet } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function ContentWrapper({ children }) {
  const themes = useThemes()

  return (
    <View
      style={[
        styles.contentWrapper,
        { backgroundColor: themes.lightBackground },
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    borderRadius: 20,
    padding: 20,
    margin: 10,
    marginTop: 50,
  },
})

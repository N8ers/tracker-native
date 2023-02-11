import { View, StyleSheet } from "react-native"

import { AppText } from "../components/AppText"

export default function ProgressTableHeaders() {
  return (
    <View style={[styles.container]}>
      <AppText style={[styles.baseText]}>Weight (lbs)</AppText>
      <AppText style={[styles.baseText]}>Date</AppText>
      <AppText style={[styles.baseText, { textAlign: "right" }]}>Edit</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderWidth: 1,
    borderColor: "orange",
    alignItems: "center",
  },
  baseText: {
    flex: 1,
    fontSize: "18px",
    fontWeight: "bold",
  },
})

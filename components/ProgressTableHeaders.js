import { View, StyleSheet } from "react-native"

import { AppText } from "../components/AppText"

export default function ProgressTableHeaders() {
  return (
    <View style={[styles.container]}>
      <AppText style={[styles.baseText, { flex: 1.25 }]}>Weight (lbs)</AppText>
      <AppText style={[styles.baseText]}>Date</AppText>
      <AppText style={[styles.baseText, { textAlign: "right", flex: 0.5 }]}>
        Edit
      </AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  baseText: {
    flex: 1,
    fontSize: "16px",
    fontWeight: "bold",
  },
})

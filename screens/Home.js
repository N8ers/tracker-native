import { Text, View, StyleSheet } from "react-native"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Open Source Tracker</Text>
      <Text>Welcome to OST! </Text>
      <Text style={styles.blob1}>
        A way to manage your weight tracking goals, while keeping your data
        secure. The source code that runs this app is publicly visible (open
        source) so you can see it doesn't do anything in secret.
      </Text>
      <Text style={styles.blob2}>
        Your data is yours! It's never sold or available to third parties.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  blob1: {
    marginTop: 10,
  },
  blob2: {
    marginTop: 10,
  },
})

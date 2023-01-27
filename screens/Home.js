import { StyleSheet } from "react-native"

import { AppText } from "../components/AppText"
import { ContentWrapper } from "../components/ContentWrapper"

export default function Home() {
  return (
    <>
      <ContentWrapper>
        <AppText style={styles.heading}>Open Source Tracker</AppText>
        <AppText>Welcome to OST! </AppText>
        <AppText style={styles.blob1}>
          A way to manage your weight tracking goals, while keeping your data
          secure. The source code that runs this app is publicly visible (open
          source) so you can see it doesn't do anything in secret.
        </AppText>
        <AppText style={styles.blob2}>
          Your data is yours! It's never sold or available to third parties.
        </AppText>
      </ContentWrapper>
    </>
  )
}

const styles = StyleSheet.create({
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

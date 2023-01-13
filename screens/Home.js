import { Text, View, Button } from "react-native"

import { showSuccessToast, showErrorToast, showInfoToast } from "../util/toasts"

export default function Home() {
  return (
    <View>
      <Text>I am home!</Text>
      <Button
        title="Show success"
        onPress={showSuccessToast({
          headerText: "Greate success!",
          subText: "Something succeeded :)",
        })}
      />
      <Button title="Show error" onPress={showErrorToast} />
      <Button title="Show info" onPress={showInfoToast} />
    </View>
  )
}

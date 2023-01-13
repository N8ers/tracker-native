import Toast from "react-native-toast-message"
import { Text, View, Button } from "react-native"

export default function Home() {
  const showSuccessToast = () => {
    Toast.show({
      type: "success",
      text1: "Hello",
      text2: "This is some something 👋",
      visibilityTime: 4000,
    })
  }

  const showErrorToast = () => {
    Toast.show({
      type: "error",
      text1: "Hello",
      text2: "This is some something 👋",
      visibilityTime: 4000,
    })
  }

  const showInfoToast = () => {
    Toast.show({
      type: "info",
      text1: "Hello",
      text2: "This is some something 👋",
      visibilityTime: 4000,
    })
  }

  return (
    <View>
      <Text>I am home!</Text>
      <Button title="Show success" onPress={showSuccessToast} />
      <Button title="Show error" onPress={showErrorToast} />
      <Button title="Show info" onPress={showInfoToast} />
    </View>
  )
}

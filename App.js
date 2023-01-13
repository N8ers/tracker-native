import { Provider } from "react-redux"
import Toast from "react-native-toast-message"

import { store } from "./store/store"

import ScreensWrapper from "./screens/ScreensWrapper"

export default function App() {
  return (
    <Provider store={store}>
      <ScreensWrapper />
      <Toast />
    </Provider>
  )
}

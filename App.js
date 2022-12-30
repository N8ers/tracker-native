import { Provider } from "react-redux"

import { store } from "./store/store"

import ScreensWrapper from "./screens/ScreensWrapper"

export default function App() {
  return (
    <Provider store={store}>
      <ScreensWrapper />
    </Provider>
  )
}

import { Text } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function AppText({ children }) {
  const themes = useThemes()

  return <Text style={themes.text}>{children}</Text>
}

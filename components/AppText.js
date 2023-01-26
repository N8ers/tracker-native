import { Text } from "react-native"

import { useThemes } from "../hooks/useThemes"

export function AppText({ children, style }) {
  const themes = useThemes()

  return <Text style={[themes.text, style]}>{children}</Text>
}

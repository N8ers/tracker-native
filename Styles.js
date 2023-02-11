import { StyleSheet } from "react-native"

export const darkmode = StyleSheet.create({
  background: "#151718",
  text: { color: "white" },
  lightBackground: "#282A2C",
  action: "#FDF485",
  action: { color: "#FDF485" },
  danger: { color: "#E28ED1" },
  dangerBackground: { backgroundColor: "#E28ED1" },
  actionBackground: { backgroundColor: "#FDF485" },
  secondary: { color: "#B3FFE0" },
  secondaryBackground: { backgroundColor: "#B3FFE0" },
})

export const lightmode = StyleSheet.create({
  background: "#FFF",
  text: { color: "black" },
  lightBackground: "#CCC",
  action: { color: "#6bc492" },
  actionBackground: { backgroundColor: "#6bc492" },
  secondary: { color: "#c46bbe" },
  secondaryBackground: { backgroundColor: "#c46bbe" },
})

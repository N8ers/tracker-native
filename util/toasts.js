import Toast from "react-native-toast-message"

export const showSuccessToast = ({ headerText = "Success!", subText = "" }) => {
  Toast.show({
    type: "success",
    text1: headerText,
    text2: subText,
    visibilityTime: 4000,
  })
}

export const showErrorToast = ({ headerText = "Error!", subText = "" }) => {
  Toast.show({
    type: "error",
    text1: headerText,
    text2: subText,
    visibilityTime: 4000,
  })
}

export const showInfoToast = ({ headerText = "Info", subText = "" }) => {
  Toast.show({
    type: "info",
    text1: headerText,
    text2: subText,
    visibilityTime: 4000,
  })
}

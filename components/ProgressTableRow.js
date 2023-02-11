import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { View, Pressable } from "react-native"
import { format } from "date-fns"

import { AppText } from "../components/AppText"

import { useThemes } from "../hooks/useThemes"

export default ProgressTableRow = ({ id, date, weight, onPress }) => {
  const themes = useThemes()

  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        borderBottomWidth: 1,
        borderColor: themes.secondaryBackground,
        alignItems: "center",
      }}
    >
      <AppText
        style={{
          flex: 1.25,
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {weight}
      </AppText>
      <AppText
        style={{
          flex: 1,
          // textAlign: "center",
          fontSize: "16px",
        }}
      >
        {format(new Date(date), "MMM dd, u")}
      </AppText>
      <Pressable
        onPress={() => onPress({ id, date, weight })}
        style={{ flex: 0.5, textAlign: "right" }}
      >
        <MaterialCommunityIcons
          style={{ textAlign: "right" }}
          name="pencil"
          color={themes.secondary.color}
          size={"20"}
        />
      </Pressable>
    </View>
  )
}

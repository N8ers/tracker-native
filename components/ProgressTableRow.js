import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { View, Pressable } from "react-native"
import { format } from "date-fns"

import { AppText } from "../components/AppText"

import { useThemes } from "../hooks/useThemes"

export default ProgressTableRow = ({ id, date, weight }) => {
  const themes = useThemes()

  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        borderWidth: 1,
        borderColor: "orange",
        alignItems: "center",
      }}
    >
      <AppText
        style={{
          flex: 1,
          fontSize: "18px",
        }}
      >
        {weight}
      </AppText>
      <AppText
        style={{
          flex: 1,
          // textAlign: "center",
          fontSize: "18px",
        }}
      >
        {format(new Date(date), "MMM dd, u")}
      </AppText>
      <Pressable
        onPress={() => console.log(`id: ${id} was pressed!`)}
        style={{ flex: 1, textAlign: "right" }}
      >
        <MaterialCommunityIcons
          style={{ textAlign: "right" }}
          name="pencil"
          color={themes.secondary.color}
          size={"24"}
        />
      </Pressable>
    </View>
  )
}

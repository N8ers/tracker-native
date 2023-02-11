import { Text, View } from "react-native"
import { useState } from "react"
import DateTimePicker from "@react-native-community/datetimepicker"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { useThemes } from "../hooks/useThemes"

export default function DateRangeSelector() {
  const themes = useThemes()

  const createInitialStateDateRange = () => {
    const today = new Date()
    const oneMonthAgo = today.setMonth(today.getMonth() - 1)
    const oneMonthAgoToDate = new Date(oneMonthAgo)
    return oneMonthAgoToDate
  }

  const [startDateRange, setStartDateRange] = useState(
    createInitialStateDateRange()
  ) // make this 30 days ago (or just 1 month)
  const [endDateRange, setEndDateRange] = useState(new Date())

  const openCalendar = (_, date, setFunction) => {
    setFunction(date)
  }

  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: themes.lightBackground,
        margin: 20,
        padding: 10,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DateTimePicker
        testId="dateTimePicker"
        value={startDateRange}
        mode={"date"}
        is24Hour={true}
        display="default"
        displayFormat={"DD MM YYYY"}
        themeVariant="dark"
        accentColor={themes.secondary.color}
        onChange={(event, date) => openCalendar(event, date, setStartDateRange)}
      />
      <MaterialCommunityIcons
        style={{ textAlign: "right" }}
        name="calendar"
        color={themes.secondary.color}
        size={"18"}
      />

      <Text style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}>|</Text>

      <DateTimePicker
        testId="dateTimePicker"
        value={endDateRange}
        mode={"date"}
        is24Hour={true}
        display="default"
        displayFormat={"DD MM YYYY"}
        themeVariant="dark"
        accentColor={themes.secondary.color}
        onChange={(event, date) => openCalendar(event, date, setEndDateRange)}
      />
      <MaterialCommunityIcons
        style={{ textAlign: "right" }}
        name="calendar"
        color={themes.secondary.color}
        size={"18"}
      />
    </View>
  )
}

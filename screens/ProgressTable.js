import { useDispatch, useSelector } from "react-redux"
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  Button,
} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import DateTimePicker from "@react-native-community/datetimepicker"

import { useThemes } from "../hooks/useThemes"

import { fetchWeights } from "../store/weights"
import { useEffect, useState } from "react"

export default function ProgressTable() {
  const weights = useSelector((state) => state.weight.weights)
  const isLoading = useSelector((state) => state.weight.loading)

  const themes = useThemes()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeights())
  }, [])

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState("date")
  const [show, setShow] = useState(false)
  const [text, useText] = useState("empty")

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    // setShow(Platform.os == "ios")
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear()
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes()
    setText(fDate + "\n" + fTime)
    console.log(fDate + " (" + fTime + ")")
  }

  const showMode = (currnetMode) => {
    setShow(true)
    setMode(currnetMode)
  }

  const openCalendar = (selectedCalendar) => {
    console.log({ selectedCalendar })
    // setStartRangeIsOpen(true)
  }

  return (
    <View>
      {!isLoading && (
        <View>
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
            <Pressable
              onPress={() => openCalendar("startRange")}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", marginRight: 10 }}>MM/DD/YYY</Text>
              <MaterialCommunityIcons name="calendar" color="white" size="24" />
            </Pressable>
            <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 20 }}>
              |
            </Text>
            <Pressable
              onPress={() => openCalendar("endRange")}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", marginRight: 10 }}>MM/DD/YYY</Text>
              <MaterialCommunityIcons name="calendar" color="white" size="24" />
            </Pressable>
          </View>

          <Text>{text}</Text>
          <Button title="date" onPress={() => showMode("date")} />
          <Button title="time" onPress={() => showMode("time")} />
          {show && (
            <View>
              <DateTimePicker
                testId="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            </View>
          )}

          <SafeAreaView>
            <FlatList
              data={weights}
              renderItem={({ item }) => (
                <View>
                  <Text style={styles.listItem}>
                    <Text style={styles.listItemDate}>
                      {item.date.split("T")[0]}
                    </Text>
                    <Text style={styles.listItemWeight}>{item.weight}</Text>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
  },
  listItemDate: {},
  listItemWeight: {
    marginLeft: 50,
  },
})

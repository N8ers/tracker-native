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

  const openCalendar = (event, date) => {
    console.log(date)
    // setDate()
  }

  return (
    <View>
      <DateTimePicker
        testId="dateTimePicker"
        value={date}
        mode={"date"}
        is24Hour={true}
        display="default"
        format={"YYYY/MM/DD"}
        displayFormat={"DD MMM YYYY"}
        onChange={openCalendar}
      />

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

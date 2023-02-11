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

  const openCalendar = (event, date, setFunction) => {
    setFunction(date)
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
            <DateTimePicker
              testId="dateTimePicker"
              value={startDateRange}
              mode={"date"}
              is24Hour={true}
              display="default"
              displayFormat={"DD MM YYYY"}
              themeVariant="dark"
              accentColor={themes.secondary.color}
              onChange={(event, date) =>
                openCalendar(event, date, setStartDateRange)
              }
            />

            <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 20 }}>
              |
            </Text>

            <DateTimePicker
              testId="dateTimePicker"
              value={endDateRange}
              mode={"date"}
              is24Hour={true}
              display="default"
              displayFormat={"DD MM YYYY"}
              themeVariant="dark"
              accentColor={themes.secondary.color}
              onChange={(event, date) =>
                openCalendar(event, date, setEndDateRange)
              }
            />
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
